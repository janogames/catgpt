// Predefined responses from CatGPT
const responses = [
    "Meow. That's none of your business.",
    "I’d help, but I’m busy napping.",
    "I knocked over your coffee. You’re welcome.",
    "What's in it for me?",
    "Feed me first, then we’ll talk.",
    "Why do humans ask so many questions? Just pet me."
  ];
  
  // Function to generate a CatGPT response
  function getCatResponse() {
    const userInput = document.getElementById("userInput");
    const userInputValue = userInput.value.trim();
  
    if (!userInputValue) return; // Ignore empty input
  
    const chatBox = document.getElementById("chat-box");
  
    // Display user's message
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerText = userInputValue;
    chatBox.appendChild(userMessage);
  
    // Display CatGPT response
    const randomIndex = Math.floor(Math.random() * responses.length);
    const catMessage = document.createElement("div");
    catMessage.className = "message cat-response";
    catMessage.innerText = responses[randomIndex];
    chatBox.appendChild(catMessage);
  
    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // Clear input field
    userInput.value = "";
  }
  
  // Add event listener to the Send button
  document.getElementById("send-btn").addEventListener("click", getCatResponse);
  