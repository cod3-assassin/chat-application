import React, { useState } from "react";
import Sidebar from "../components/Home/Sidebar";
import ConversationList from "../components/Home/ConversationList";
import Chat from "./Chat";

function Home({ conversations, selectConversation, currentChat }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-black">
      <button
        className="md:hidden p-2 text-2xl absolute top-4 right-4 z-50"
        onClick={toggleSidebar}
      >
        &#9776;
      </button>
      <div className="p-2 ml-6">
        <Sidebar isOpen={isSidebarOpen} />
      </div>
      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 p-2">
          <ConversationList
            conversations={conversations}
            selectConversation={selectConversation}
          />
        </div>
        <div className="w-full lg:w-2/3 p-2 flex items-center justify-center bg-gray-800">
          {currentChat ? (
            <Chat chatName={currentChat?.name} />
          ) : (
            <div className="text-white">
              Select a conversation to start chatting
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
