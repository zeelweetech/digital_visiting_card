import React from "react";
import logo from "../assets/image/logo.png";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    // <div className='mt-2'>
    //     <hr></hr>
        <div className="relative flex justify-between items-center py-2 px-40">
            <div>
              <img src={logo} className="w-32" alt="Not Found" />
            </div>
            <div className="flex items-center">
                <div className="relative group">
                    <p className="text-xl flex items-center group-hover:text-lime-600 cursor-pointer">
                      Categories
                      <IoIosArrowDown className="mt-1"/>
                    </p>
                    <div className="absolute mt-4 w-40 bg-white border shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <ul className="list-none">
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">
                            Business Card
                          </li>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">
                            Personal Card
                          </li>
                        </ul>
                    </div>
                </div>
                <button className="border-none text-xl ml-16 bg-neutral-700 text-white pt-1 pb-2 px-6 rounded-full">Logout</button>
            </div>
        </div>
    //     <hr></hr>
    //  </div>
  );
}

export default Header;
