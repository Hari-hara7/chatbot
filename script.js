const chatbotResponses = [
  "Welcome to Academic Pal!",
  "How can I assist you today?",
  "Nice to have you here!",
  "Greetings!",
  "Is there anything specific you'd like to explore?",
  "Feel free to ask me anything!",
  "What feature are you interested in?",
  "I'm here to help!",
];

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const chat = document.getElementById("chat");

  const message = messageInput.value.trim();
  if (message === "") {
    return;
  }

  const newMessage = document.createElement("div");
  newMessage.textContent = `You: ${message}`;
  chat.appendChild(newMessage);

  // Check user's message for specific options
  processUserMessage(message);

  // Clear the input field after sending the message
  messageInput.value = "";

  // Scroll to the bottom of the chat after adding a new message
  chat.scrollTop = chat.scrollHeight;
}

function simulateReply() {
  const chat = document.getElementById("chat");

  const replyDelay = Math.random() * 2000 + 1000; // Between 1 and 3 seconds
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * chatbotResponses.length);
    const replyMessage = document.createElement("div");
    replyMessage.textContent = `Chatbot: ${chatbotResponses[randomIndex]}`;
    chat.appendChild(replyMessage);

    // Scroll to the bottom after adding a new message
    chat.scrollTop = chat.scrollHeight;
  }, replyDelay);
}

function processUserMessage(message) {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes("notes")) {
    displayLink(
      "NMAMIT Notes",
      "https://hari-hara7.github.io/NMAMIT-notes-website/"
    );
  } else if (lowerCaseMessage.includes("web development")) {
    displayLink(
      "Pro Developer",
      "https://hari-hara7.github.io/pro-developer-/"
    );
  } else if (lowerCaseMessage.includes("dsa")) {
    displayLink(
      "DSA Learning Platform",
      "https://hari-hara7.github.io/DSA-learning-platform/"
    );
  } else if (lowerCaseMessage.includes("ui/ux")) {
    displayLink(
      "UI/UX Learning",
      "https://hari-hara7.github.io/ui-and-ux-learning/"
    );
  } else if (lowerCaseMessage.includes("time table")) {
    displayLink("Time Table Creator", "#"); // Add the link when available
  } else {
    simulateReply(); // Default response if no specific option is matched
  }
}

function displayLink(title, link) {
  const chat = document.getElementById("chat");

  const linkMessage = document.createElement("div");
  linkMessage.innerHTML = `Chatbot: Sure, here is the link for ${title}: <a href="${link}" target="_blank">${link}</a>`;
  chat.appendChild(linkMessage);

  // Scroll to the bottom after adding a new message
  chat.scrollTop = chat.scrollHeight;
}
