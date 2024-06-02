import React, { useState } from "react";
import Sidebar from "../components/Home/Sidebar";
import ConversationList from "../components/Home/ConversationList";

function Home({ conversations, selectConversation }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <button
        className="md:hidden p-2 text-2xl absolute top-4 right-4 z-50"
        onClick={toggleSidebar}
      >
        &#9776;
      </button>
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 overflow-y-auto">
        <ConversationList
          conversations={conversations}
          selectConversation={selectConversation}
        />
      </div>
    </div>
  );
}

export default Home;
