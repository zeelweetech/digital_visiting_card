import React from "react";
import logo from "../assets/image/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50">
      <hr className="border-t border-gray-200 shadow-sm" />
      <div className="relative flex flex-wrap justify-between items-center py-2 px-4 md:px-8 lg:px-16">
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={() => {
            navigate("/home_page");
          }}
        >
          <img src={logo} className="w-24 md:w-32" alt="Not Found" />
        </div>
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="relative group">
            <p className="text-lg md:text-xl flex items-center group-hover:text-lime-600 cursor-pointer">
              Categories
              <IoIosArrowDown className="ml-1 mt-0.5" />
            </p>
            <div className="absolute mt-2 md:mt-4 w-32 md:w-40 bg-white border shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <ul className="list-none">
                <li
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/business_profile_design")}
                >
                  Business Card
                </li>
                <li
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/personal_profile_design")}
                >
                  Personal Card
                </li>
              </ul>
            </div>
          </div>
          <button
            className="border-none text-base md:text-xl bg-neutral-700 text-white py-1 px-4 md:py-2 md:px-6 rounded-full"
            onClick={() => {
              navigate("/");
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <hr className="border-t border-gray-200 shadow-sm" />
    </div>
  );
}

export default Header;
