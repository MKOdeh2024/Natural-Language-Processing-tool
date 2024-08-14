const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('dist'));

// Replace with your MeaningCloud API key
const apiKey = process.env.API_KEY;

// Function to analyze sentiment using MeaningCloud API
app.post('/analyze', async(req, res) => {
    const { text } = req.body;
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&txt=${encodeURIComponent(text)}&lang=en`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error analyzing text');
    }
});

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});