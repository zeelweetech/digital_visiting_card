import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function Cardbutton({handleCardTypeChange}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCardTypeSelection = (type) => {
    handleCardTypeChange(type);
    setIsOpen(false);
  };

  return (
    <div className="flex space-x-4 px-20 py-4">
      <div className="relative inline-block text-left">
        <div>
          <select
            type="button"
            className="mr-14 items-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <option>All Card</option>
            <option>Business Card</option>
            <option>Personal Card</option>

            {/* <IoIosArrowDown /> */}
          </select>
        </div>

        {/* {isOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <Link
                href="@"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200"
                onClick={() => handleCardTypeSelection('Business')}
              >
                All Card
              </Link>
              <Link
                href="@"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200"
              >
                Business Card
              </Link>
              <Link
                href="@"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200"
                onClick={() => handleCardTypeSelection('Personal')}
              >
                Personal Card
              </Link>
            </div>
          </div>
        )} */}
      </div>
      <div>
        <button
          className="bg-black py-1 px-6 rounded-full text-white"
          onClick={() => {
            navigate("/business_profile_design");
          }}
        >
          Create a Digital Business Card
        </button>
      </div>
      <div>
        <button
          className="bg-black py-1 px-6 rounded-full text-white"
          onClick={() => {
            navigate("/personal_profile_design");
          }}
        >
          Create a Digital Personal Card
        </button>
      </div>
    </div>
  );
}

export default Cardbutton;
