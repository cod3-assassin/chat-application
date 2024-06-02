import React from "react";
import { FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";

function ProfileHeader({ userName }) {
  return (
    <header className="flex justify-between items-center bg-gray-700 text-white p-4">
      <div>
        <FaUserCircle className="text-3xl mr-2" />
        <span className="text-xl">{userName}</span>
      </div>
      <div className="flex items-center">
        <button className="mr-4">
          <FaCog className="text-xl" />
        </button>
        <button>
          <FaSignOutAlt className="text-xl" />
        </button>
      </div>
    </header>
  );
}

export default ProfileHeader;
