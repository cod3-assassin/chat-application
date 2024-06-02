import React, { useState } from "react";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  RiUserSettingsLine,
  RiTextBlock,
  RiVolumeMuteLine,
} from "react-icons/ri";

function ChatHeader({ chatName, backToHome }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="chat-header p-4 bg-gray-700 text-white flex justify-between items-center relative">
      <button onClick={backToHome} className="text-lg">
        <IoMdArrowBack />
      </button>
      <h2 className="text-xl">{chatName}</h2>
      <div className="text-lg relative">
        <IoMdMore onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-800 shadow-md rounded-lg py-2 overflow-y-auto z-10">
            <div className="flex items-center px-4 py-2 hover:bg-zinc-800">
              <RiUserSettingsLine className="mr-2" />
              <Link to="/profile/:userId">View Profile</Link>
            </div>
            <div className="flex items-center px-4 py-2 hover:bg-zinc-800">
              <RiTextBlock className="mr-2" />
              <Link to="/block/:userId">Block User</Link>
            </div>
            <div className="flex items-center px-4 py-2 hover:bg-zinc-800">
              <RiVolumeMuteLine className="mr-2" />
              <Link to="/mute/:conversationId">Mute Conversation</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatHeader;
