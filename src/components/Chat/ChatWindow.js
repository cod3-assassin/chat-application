import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const ChatWindow = ({
  selectedConversation,
  conversations,
  setConversations,
}) => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConversation]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const updatedConversations = conversations.map((conv) => {
      if (conv.id === parseInt(id)) {
        return {
          ...conv,
          messages: [...conv.messages, { text: message, sender: "me" }],
          lastMessage: message,
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const selectedConv = conversations.find((conv) => conv.id === parseInt(id));

  return (
    <div className="flex flex-1 flex-col bg-[#F8F9FB] rounded-lg">
      {selectedConv ? (
        <>
          <div className="flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200">
            <div className="text-lg font-bold">{selectedConv.name}</div>
            <div>23 members, 10 online</div>
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 p-4 overflow-y-auto">
              {selectedConv.messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 my-2 rounded-lg ${
                    msg.sender === "me"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-300"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messageEndRef} />
            </div>
            <div className="p-4 bg-white shadow-md flex items-center border-t border-gray-200">
              <input
                type="text"
                className="flex-grow p-2 border rounded-lg mr-2"
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="p-2 bg-blue-500 text-white rounded-lg shadow-md"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-1 items-center justify-center text-gray-500">
          Select a conversation to start chatting
        </div>
      )}
    </div>
  );
};

ChatWindow.propTypes = {
  selectedConversation: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    lastMessage: PropTypes.string,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        sender: PropTypes.string,
      })
    ),
  }),
  conversations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      lastMessage: PropTypes.string,
      messages: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          sender: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  setConversations: PropTypes.func.isRequired,
};

export default ChatWindow;
