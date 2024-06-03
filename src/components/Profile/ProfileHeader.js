// ProfileHeader.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";

function ProfileHeader({ userName }) {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center bg-gray-700 text-white p-4">
      <div className="flex items-center">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-2xl mr-2" />
        </button>
        <FaUserCircle className="text-3xl mr-2" />
        <span className="text-xl">{userName}</span>
      </div>
      <div className="flex items-center">
        <button className="mr-4" onClick={() => navigate("/settings")}>
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
