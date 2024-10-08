import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function Cardbutton({ setCardName }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setCardName(value);
  };

  return (
    <div
      className="flex flex-col md:flex-row md:space-x-4 px-4 py-4 md:px-20"
    >
      <div className="relative inline-block text-left w-full md:w-auto">
        <div>
          <select
            type="button"
            className="w-full md:w-auto mr-0 md:mr-14 items-center inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onChange={(e) => handleOnChange(e)}
          >
            <option value="">All Card</option>
            <option value="businesscard">Business Card</option>
            <option value="personalcard">Personal Card</option>
          </select>
        </div>
      </div>

      <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-4">
        <button
          className="bg-darkblue py-2 px-6 rounded-full text-white mb-2 md:mb-0"
          onClick={() => {
            navigate("/business_profile_design");
          }}
        >
          Create a Digital Business Card
        </button>
      </div>
      <div className="md:mt-0 flex flex-col md:flex-row md:space-x-4">
        <button
          className="bg-darkblue py-2 px-6 rounded-full text-white"
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
