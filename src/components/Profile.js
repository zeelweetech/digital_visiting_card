import React from "react";
import profile from "../assets/image/profile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  return (
    <>
      <div>
        <form className="flex flex-col justify-center items-center h-screen bg-sky-50">
          <div className="text-center relative">
            <img
              className="inline-block h-28 w-28 rounded-full ring-2 ring-white"
              src={profile}
              alt="Profile"
            />
            
            <button 
              className="absolute translate-x-1/2 translate-y-1/2 rounded-full p-2"
              aria-label="Change Profile Picture"
            >
              <FontAwesomeIcon icon={faCamera} className="text-gray-700" />
            </button>

            <div className="md:w-2/3 mt-8">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
                id="inline-full-name"
                type="text"
                placeholder="Enter Name"
              />
            </div>

            <div className="md:w-2/3 mt-5">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
                id="inline-full-title"
                type="text"
                placeholder="Enter Title"
              />
            </div>

            <div className="md:w-2/3 mt-5">
              <textarea
                rows="4"
                cols="50"
                placeholder="Description"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
              ></textarea>
            </div>

            <div className="flex justify-between mt-10">
              <button className="bg-darkblue text-white font-semibold rounded-full py-2 px-10">Back</button>
              <button className="bg-darkblue text-white font-semibold rounded-full py-2 px-10">Next</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
