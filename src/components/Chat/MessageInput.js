import React, { useState } from "react";

function MessageInput({ sendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="message-input p-4 bg-gray-100 flex"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow p-2 border rounded"
        placeholder="Type a message..."
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </form>
  );
}

export default MessageInput;
