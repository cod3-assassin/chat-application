// messageUtils.js

export const generateRandomMessage = () => {
  const randomTexts = [
    "Hello!",
    "How are you?",
    "What's up?",
    "Nice weather today!",
    "Any plans for the weekend?",
    "I have a question...",
    "Have you seen the latest movie?",
    "I'm feeling bored.",
  ];

  const randomIndex = Math.floor(Math.random() * randomTexts.length);
  const randomMessage = randomTexts[randomIndex];

  const timestamp = new Date().toLocaleTimeString();

  return {
    text: randomMessage,
    timestamp: timestamp,
    sender: "Another User", // Add sender information
  };
};
