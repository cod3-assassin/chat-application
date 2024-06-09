import React, { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Home/Sidebar";
import ChatWindow from "./components/Chat/ChatWindow";
import ConversationList from "./components/Home/ConversationList";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const selectConversation = (conversationId) => {
    const conversation = conversations.find(
      (conv) => conv.id === conversationId
    );
    setSelectedConversation(conversation);
    navigate(`/conversation/${conversationId}`);
  };

  const [conversations, setConversations] = useState([
    { id: 1, name: "John Doe", lastMessage: "Hey there!", messages: [] },
    { id: 2, name: "Jane Smith", lastMessage: "How are you?", messages: [] },
    { id: 3, name: "Skipper", lastMessage: "Hey there!", messages: [] },
    { id: 4, name: "Kwolski", lastMessage: "How are you?", messages: [] },
    { id: 5, name: "Private", lastMessage: "Hey there!", messages: [] },
    { id: 6, name: "Riko", lastMessage: "How are you?", messages: [] },
    { id: 7, name: "Private", lastMessage: "Hey there!", messages: [] },
    { id: 8, name: "Riko", lastMessage: "How are you?", messages: [] },
  ]);

  const isChatWindowOpen = location.pathname.startsWith("/conversation");

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <button
        className="md:hidden p-2 text-2xl absolute top-4 right-4 z-50"
        onClick={toggleSidebar}
      >
        &#9776;
      </button>
      <Sidebar isOpen={isSidebarOpen} />

      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        <div
          className={`lg:w-1/3 ${
            isChatWindowOpen ? "hidden md:block" : "block"
          } bg-white`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <ConversationList
                  conversations={conversations}
                  selectConversation={selectConversation}
                />
              }
            />
          </Routes>
        </div>
        <div
          className={`lg:w-2/3 ${
            isChatWindowOpen ? "block" : "hidden md:block"
          } bg-white`}
        >
          <Routes>
            <Route
              path="/conversation/:id"
              element={
                <ChatWindow
                  selectedConversation={selectedConversation}
                  conversations={conversations}
                  setConversations={setConversations}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
