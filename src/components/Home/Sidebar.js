import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMessageSquare,
  FiUsers,
  FiArchive,
  FiUser,
  FiEdit,
  FiLogOut,
} from "react-icons/fi";

function Sidebar({ isOpen }) {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed h-full ${
        isOpen ? "transform translate-x-0" : "transform -translate-x-full"
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 rounded-lg z-40`}
    >
      <div className="lg:flex flex-col w-20 bg-[#343541] text-white p-4 space-y-4 rounded-lg h-full">
        <button className="w-full p-2 rounded-lg hover:bg-[#474953] flex justify-center">
          <FiMessageSquare size={24} />
        </button>
        <button className="w-full p-2 rounded-lg hover:bg-[#474953] flex justify-center">
          <FiUsers size={24} />
        </button>
        <button className="w-full p-2 rounded-lg hover:bg-[#474953] flex justify-center">
          <FiArchive size={24} />
        </button>
        <button className="w-full p-2 rounded-lg hover:bg-[#474953] flex justify-center">
          <FiUser size={24} />
        </button>
        <button className="w-full p-2 rounded-lg hover:bg-[#474953] flex justify-center">
          <FiEdit size={24} />
        </button>
        <button className="w-full p-2 rounded-lg hover:bg-[#474953] flex justify-center mt-auto">
          <FiLogOut size={24} />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
