function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    var chatBox = document.getElementById("chat-box");

    // Display user message
    var userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = "<strong>You:</strong> " + userInput;
    chatBox.appendChild(userMessage);

    // Simulate BridgeBot response based on user input
    var botResponse = getBotResponse(userInput);
    var botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.innerHTML = "<strong>BridgeBot:</strong> " + botResponse;
    chatBox.appendChild(botMessage);

    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field
    document.getElementById("user-input").value = "";
}

function getBotResponse(userInput) {
    // Simulate BridgeBot responses based on user input
    if (userInput.toLowerCase().includes("skills")) {
        return "Great! Let's assess your digital skills. Please visit our skills assessment page.";
    } else if (userInput.toLowerCase().includes("resources")) {
        return "We offer a variety of educational resources. Check out our resources section for more information.";
    } else {
        return "I'm here to help you bridge the digital divide. How can I assist you today?";
    }
}
function scrollToChat() {
    document.querySelector('.chat-container').scrollIntoView({ behavior: 'smooth' });
}