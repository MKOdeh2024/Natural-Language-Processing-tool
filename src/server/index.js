const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Replace with your MeaningCloud API key
const apiKey = process.env.API_KEY;

// Function to analyze sentiment using MeaningCloud API
async function analyzeSentiment(text) {
    try {
        const response = await axios.post('https://api.meaningcloud.com/sentiment-2.1', null, {
            params: {
                key: apiKey,
                txt: text,
                lang: 'en', // Language of the text
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error analyzing sentiment:', error);
        throw error;
    }
}

// Route to handle sentiment analysis requests
app.post('/analyze-sentiment', async(req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required for sentiment analysis' });
    }

    try {
        const sentimentResult = await analyzeSentiment(text);
        res.json(sentimentResult);
    } catch (error) {
        res.status(500).json({ error: 'Failed to analyze sentiment' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});