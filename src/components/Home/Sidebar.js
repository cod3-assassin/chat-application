import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ isOpen }) {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gradient-to-br from-green-400 to-blue-500 text-white w-64 ${
        isOpen ? "transform translate-x-0" : "transform -translate-x-full"
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 rounded-lg`}
    >
      <div className="p-4 h-full overflow-y-auto">
        <div className="user-profile mb-6">
          <img
            src="/profile-pic.jpg"
            alt="Profile"
            className="rounded-full w-16 h-16 mb-2"
          />
          <h3 className="text-lg font-semibold">Username</h3>
        </div>
        <div className="navigation mb-4">
          <button
            onClick={() => navigate("/profile")}
            className="block mb-2 text-gray-100 hover:text-white"
          >
            Profile
          </button>
          <button
            onClick={() => navigate("/settings")}
            className="block mb-2 text-gray-100 hover:text-white"
          >
            Settings
          </button>
          <button
            onClick={() => navigate("/logout")}
            className="block text-gray-100 hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
