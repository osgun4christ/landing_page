function sendMessage(message) {
    var chatBox = document.getElementById("chat-box");

    // Display user message
    var userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = "<strong>You:</strong> " + message;
    chatBox.appendChild(userMessage);

    // Simulate DigiBridge Bot response based on user input
    var botResponse = getBotResponse(message);
    var botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.innerHTML = "<strong>DigiBridge Bot:</strong> " + botResponse;
    chatBox.appendChild(botMessage);

    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleUserOption(option) {
    sendMessage(option);
}

function handleUserInput() {
    var userInput = document.getElementById("user-input").value;
    sendMessage(userInput);
    document.getElementById("user-input").value = ""; // Clear input field after sending message
}

function getBotResponse(userInput) {
    // Simulate DigiBridge Bot responses based on user input
    switch (userInput.toLowerCase()) {
        case 'skills':
            return "Great! Let's assess your digital skills. The journey of a thousand miles starts now, respond to these skills assessment Questions.";
        case 'resources':
            return "We offer a variety of educational resources. Check out our resources section for more information.";
        case 'courses':
            return "Certainly! We have a wide range of online courses available. You can browse through our course catalog.";
        case 'assistance':
            return "Of course, I'm here to assist you. What specific help do you need?";
        case 'feedback':
            return "Your feedback is valuable to us! Please share any suggestions or comments you have.";
        default:
            return "I'm here to help you bridge the digital divide. How can I assist you today?";
    }
}


function scrollToChat() {
    document.querySelector('.chat-container').scrollIntoView({ behavior: 'smooth' });
}