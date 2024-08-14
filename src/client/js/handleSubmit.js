import { checkForName } from './nameChecker';


const handleSubmit = async(event) => {
    event.preventDefault();

    // Clear previous results and errors
    clearResults();
    clearError();

    // Get the URL input value
    const articleUrl = document.getElementById('article-url').value;

    // Check if it's a valid URL
    if (!isValidUrl(articleUrl)) {
        showError('Please enter a valid URL');
        return;
    }

    // Check if it's a name (just as an example of using checkForName)
    if (checkForName(articleUrl)) {
        showError('This looks like a name, not a URL. Please enter a valid article URL.');
        return;
    }

    try {
        // Show loading state
        showLoading();

        // Send POST request to your server
        const response = await fetch('/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: articleUrl }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Update the UI with the results
        updateUI(data);
    } catch (error) {
        console.error('Error:', error);
        showError('An error occurred while analyzing the article. Please try again.');
    } finally {
        hideLoading();
    }
};


const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
};

const showError = (message) => {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
};

const clearError = () => {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = '';
};

const clearResults = () => {
    document.getElementById('polarity').textContent = '';
    document.getElementById('subjectivity').textContent = '';
    document.getElementById('text-snippet').textContent = '';
};

const showLoading = () => {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.style.display = 'block';
    }
};

const hideLoading = () => {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
};

const updateUI = (data) => {
    document.getElementById('polarity').textContent = `Polarity: ${data.polarity}`;
    document.getElementById('subjectivity').textContent = `Subjectivity: ${data.subjectivity}`;
    document.getElementById('text-snippet').textContent = `Text: ${data.text}`;
};

export { handleSubmit };