import React, { useState, useRef } from "react";
import { RiSendPlane2Line } from "react-icons/ri";
import ChatHeader from "../components/Chat/ChatHeader";

function Chat({ chatName, messages, sendMessage, backToHome }) {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Render the ChatHeader component */}
      <ChatHeader chatName={chatName} backToHome={backToHome} />

      {/* Rest of your Chat component */}
      <div className="messages flex-grow p-4 bg-gray-100 overflow-y-scroll">
        {messages.map((msg, index) => (
          <div key={index} className="message p-2 bg-white rounded mb-2">
            <p className="text-gray-600">{msg.timestamp}</p>
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="message-input p-4 bg-gray-100 flex items-center"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 border rounded mr-2"
          placeholder="Type a message..."
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          <RiSendPlane2Line />
        </button>
      </form>
    </div>
  );
}

export default Chat;
