import React from "react";

function MessageDisplay({ messages }) {
  return (
    <div className="message-display flex-grow overflow-y-scroll p-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`message ${
            msg.sender === "me" ? "sent" : "received"
          } mb-2`}
        >
          <div className="sender font-bold">{msg.sender}</div>
          <div className="content">{msg.content}</div>
          <div className="timestamp text-xs text-gray-600">{msg.timestamp}</div>
        </div>
      ))}
    </div>
  );
}

export default MessageDisplay;
