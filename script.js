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

  // Simulate a reply from someone else (e.g., a chatbot)
  simulateReply();

  // Clear the input field after sending the message
  messageInput.value = "";

  // Scroll to the bottom of the chat after adding a new message
  chat.scrollTop = chat.scrollHeight;
}

function simulateReply() {
  const chat = document.getElementById("chat");

  const replyDelay = Math.random() * 2000 + 1000; // Between 1 and 3 seconds
  setTimeout(() => {
    const replyMessage = document.createElement("div");
    replyMessage.textContent = `Chatbot: Hello there!`;
    replyMessage.textContent = `How can I help you today?`;
    replyMessage.textContent = `Nice to meet you!`;
    replyMessage.textContent = `Is there anything specific you'd like to talk about?`;
    replyMessage.textContent = `What's on your mind?`;
    replyMessage.textContent = `Feel free to ask me anything!`;
    replyMessage.textContent = `Tell me, how's your day going?`;
    chat.appendChild(replyMessage);

    // Scroll to the bottom after adding a new message
    chat.scrollTop = chat.scrollHeight;
  }, replyDelay);
}
const chatbotResponses = [
  "Hello there!",
  "How can I help you today?",
  "Nice to meet you!",
  "is everything is fine",
  "Is there anything specific you'd like to talk about?",
  "Feel free to ask me anything!",
  "What's on your mind?",
  "I'm here to assist you!",
  "Tell me, how's your day going?",
  "Let's chat!",
];

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
