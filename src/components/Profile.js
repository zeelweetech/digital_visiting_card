import React from "react";
import profile from "../assets/image/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Profile() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-sky-50 p-4">
      <form className="flex flex-col items-center w-full max-w-md">

      <p className="text-3xl font-semibold">Add Your Business Information</p>

        <div className="relative mt-10">
          <img
            className="inline-block h-32 w-32 rounded-full"
            src={profile}
            alt="Profile"
          />
          <button 
            className="absolute bottom-4 right-2 rounded-full p-2"
            aria-label="Change Profile Picture"
          >
            <FontAwesomeIcon icon={faCamera} className="text-darkblue text-xl"/>
          </button>
        </div>

        <div className="w-full mt-8">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
            id="inline-full-name"
            type="text"
            placeholder="Enter Name"
          />
        </div>

        <div className="w-full mt-5">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
            id="inline-full-title"
            type="text"
            placeholder="Enter Title"
          />
        </div>

        <div className="w-full mt-5">
          <textarea
            rows="4"
            placeholder="Description"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
          ></textarea>
        </div>

        <div className="flex sm:flex-row justify-between sm:space-x-4 w-full mt-10">
          <div className="flex items-center space-x-2">
            <FaArrowLeft className="text-darkblue text-sm"/>
            <button className=" text-darkblue font-semibold text-xl">Back</button>
          </div>
          <button className="flex items-center bg-darkblue text-white font-semibold text-lg rounded-full py-1.5 px-8">Next <FaArrowRight className="ml-2 text-sm"/></button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
