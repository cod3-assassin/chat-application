import React, { useState } from "react";

import Sidebar from "./components/Home/Sidebar";
import { AiOutlineSearch } from "react-icons/ai";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [conversations] = useState([
    { id: 1, name: "John Doe", lastMessage: "Hey there!" },
    { id: 2, name: "Jane Smith", lastMessage: "How are you?" },
    { id: 3, name: "Skipper", lastMessage: "Hey there!" },
    { id: 4, name: "Kwolski", lastMessage: "How are you?" },
    { id: 5, name: "Private", lastMessage: "Hey there!" },
    { id: 6, name: "Riko", lastMessage: "How are you?" },
    { id: 7, name: "Private", lastMessage: "Hey there!" },
    { id: 8, name: "Riko", lastMessage: "How are you?" },
  ]);
  return (
    <div className="flex h-screen overflow-hidden bg-black">
      <button
        className="md:hidden p-2 text-2xl absolute top-4 right-4 z-50"
        onClick={toggleSidebar}
      >
        &#9776;
      </button>
      <Sidebar isOpen={isSidebarOpen} />
      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Conversation List */}
        <div className="flex flex-col w-full lg:w-1/4 xl:w-1/5 bg-white p-4 border-r border-gray-200">
          <div className="flex items-center bg-gray-200 p-2 rounded-lg mb-4">
            <AiOutlineSearch size={24} className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-full text-gray-800"
            />
          </div>
          <div className="space-y-4 rounded-lg md:overflow-y-scroll">
            {/* Conversation items will be mapped here */}
            {conversations.map((convo) => {
              return (
                <div
                  key={convo.id}
                  className="p-2 bg-[#F8F9FB] rounded-lg shadow-md hover:bg-[#E4E5E9]"
                >
                  <p className="font-bold">{convo.name}</p>
                  <p className="text-sm text-gray-600">{convo.lastMessage}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex flex-1 flex-col bg-[#F8F9FB] rounded-lg">
          <div className="flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200">
            <div className="text-lg font-bold">Design Chat</div>
            <div>23 members, 10 online</div>
          </div>
          <div className="flex flex-1 overflow-hidden">
            <div className="flex flex-col flex-1 p-4 overflow-y-auto">
              {/* Chat messages will go here */}
              <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
                <div className="text-sm text-gray-600">Jasmin Lowery</div>
                <div className="text-lg">
                  I added new icons to our design system...
                </div>
              </div>
              <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
                <div className="text-sm text-gray-600">John Doe</div>
                <div className="text-lg">
                  I added new icons to our design system...
                </div>
              </div>

              {/* Add more chat messages */}
            </div>
            <div className="hidden xl:block w-1/4 bg-white p-4 overflow-y-auto border-l border-gray-200">
              <div className="mb-4">
                <div className="font-bold">Files</div>
                <div className="text-sm text-gray-600">265 photos</div>
              </div>
              {/* Add more group info */}
              <div className="mt-4 rounded-lg">
                <div className="font-bold">23 members</div>
                <div className="text-sm text-gray-600">
                  Tanisha Combs, Alex Hunt, ...
                </div>
              </div>
              {/* Add more members info */}
            </div>
          </div>
          <div className="p-4 bg-white shadow-md flex items-center border-t border-gray-200">
            <input
              type="text"
              className="flex-grow p-2 border rounded-lg mr-2"
              placeholder="Your message..."
            />
            <button className="p-2 bg-blue-500 text-white rounded-lg shadow-md">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
