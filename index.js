function writeCards(names, eventName) {
    const messages = []; // Initialize an empty array to hold the messages

    // Loop through the array of names
    for (let i = 0; i < names.length; i++) {
        // Create a personalized message for each name
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message); // Add the message to the messages array
    }

    return messages; // Return the array of messages
}
function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i); // Log the current number
    }
}
