import React from "react";
import { Bell, Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between ">
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl  p-4 ml-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4318FF] to-[#00BFA6] drop-shadow-md">
          Welcome to IT Solution Group
        </h1>
      </div>

      <div className="bg-white w-1/3 dark:bg-gray-800  px-6 rounded-full flex justify-end items-center shadow-md">
        <div className="relative flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-12 pl-12 pr-4 py-2 text-[#8F9BBA] rounded-full bg-[#F4F7FE] dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="w-5 h-5  absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2B3674]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex items-center space-x-6 ml-4">
          <Bell size={25} className="text-[#A3AED0] cursor-pointer" />
          <button onClick={toggleTheme} className="focus:outline-none">
            {theme === "dark" ? (
              <Sun size={25} className="text-[#A3AED0]" />
            ) : (
              <Moon size={25} className="text-[#A3AED0]" />
            )}
          </button>
          <div className="w-12 h-12  rounded-full bg-gray-300 flex items-center justify-center">
            <User size={30} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;