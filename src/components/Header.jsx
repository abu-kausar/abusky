import React from 'react';
// import logo from '../assets/logo.svg?url';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="shadow-md bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Logo and Brand */}
        <div className="flex items-center gap-3">
          <TiWeatherPartlySunny className="w-10 h-10 object-cover" />
          <h2 className="text-2xl font-semibold text-gray-800">abusky</h2>
        </div>

        {/* Right side - Title or Nav */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-2 py-1 border-2 border-gray-800 rounded-md focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;