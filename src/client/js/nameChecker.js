const checkForName = (inputText) => {
    const names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ];

    // Convert input to lowercase for case-insensitive matching
    const lowercaseInput = inputText.toLowerCase();

    // Check if the input matches any name in the list
    return names.some(name => lowercaseInput.includes(name.toLowerCase()));
};

export { checkForName };