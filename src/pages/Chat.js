import React, { useState, useRef, useEffect } from "react";
import {
  RiSendPlane2Line,
  RiEdit2Line,
  RiDeleteBin2Line,
} from "react-icons/ri";
import ChatHeader from "../components/Chat/ChatHeader";
import { useSelector, useDispatch } from "react-redux";
import { generateRandomMessage } from "./messageUtils";
import {
  sendMessage,
  deleteMessage,
  editMessage,
  updateMessageStatus,
} from "../Store/slices/chatSlice";

function Chat({ chatName }) {
  const [message, setMessage] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const intervalId = setInterval(() => {
      const newMessage = generateRandomMessage();
      dispatch(
        sendMessage({
          text: newMessage.text,
          timestamp: newMessage.timestamp,
          status: "received",
        })
      );
    }, 5000); // Every 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      if (editingIndex !== null) {
        dispatch(editMessage({ index: editingIndex, text: message }));
        setEditingIndex(null);
      } else {
        dispatch(
          sendMessage({
            text: message,
            timestamp: new Date().toLocaleTimeString(),
            status: "sent",
          })
        );
      }
      setMessage("");
      inputRef.current.focus();
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteMessage(index));
  };

  const handleEdit = (index) => {
    setMessage(messages[index].text);
    setEditingIndex(index);
    inputRef.current.focus();
  };

  const handleStatusChange = (index, status) => {
    dispatch(updateMessageStatus({ index, status }));
  };

  return (
    <div className="flex flex-col h-full">
      <ChatHeader chatName={chatName} />
      <div className="messages flex-grow p-4 bg-gray-100 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="message p-2 bg-white rounded mb-2 shadow relative group"
          >
            <p className="text-lg">{msg.text}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-600 text-xs">{msg.status}</p>
              <p className="text-gray-400 text-xs">{msg.timestamp}</p>
            </div>
            <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="p-1 text-blue-500"
                onClick={() => handleEdit(index)}
              >
                <RiEdit2Line />
              </button>
              <button
                className="p-1 text-red-500"
                onClick={() => handleDelete(index)}
              >
                <RiDeleteBin2Line />
              </button>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="message-input p-4 bg-gray-200 flex items-center"
      >
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 border rounded mr-2"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded shadow"
        >
          <RiSendPlane2Line className="text-xl" />
        </button>
      </form>
    </div>
  );
}

export default Chat;
