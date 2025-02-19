"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-lightblue-500 to-sky-600 shadow-md py-3">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
     
        <Link href="/" className="flex-shrink-0">
          <span className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black hover:from-indigo-700 hover:to-blue-800 transition-all">
            Finance Visualizer
          </span>
        </Link>

        <div className="hidden sm:flex items-center space-x-6 ml-auto">
          <Link
            href="/"
            className="text-md font-medium text-black hover:text-white border-2 border-transparent hover:border-blue-500 transition-all p-2 rounded-lg hover:bg-blue-700 transform hover:scale-105"
          >
            Transactions
          </Link>
         
          
        </div>

        <button
          onClick={toggleMenu}
          className="sm:hidden text-white focus:outline-none transform hover:scale-110 transition-all"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-blue-800 py-4 px-6 space-y-4 rounded-lg">
          <Link
            href="/"
            className="block text-lg font-medium text-white hover:bg-blue-700 hover:text-white p-3 rounded-lg transition-all"
          >
            Transactions
          </Link>
        
        </div>
      )}
    </nav>
  );
};

export default Navbar;
