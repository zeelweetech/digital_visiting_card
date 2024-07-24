import React from "react";
import { CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { TiSocialFacebook } from "react-icons/ti";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Profile_content() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-sky-50 p-4">
      <form className="flex flex-col items-center w-full max-w-md">
        <p className="text-3xl font-semibold">Add Contact Options</p>

        <div className="flex flex-col items-center w-full max-w-lg mt-10">
          <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <CiMail />
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+ Email"
            />
          </div>
        </div>

        <div className="flex flex-col items-center w-full max-w-lg py-3">
          <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <MdLocalPhone />
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+ Phone"
            />
          </div>
        </div>

        <div className="flex flex-col items-center w-full max-w-lg">
          <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <FiMapPin />
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+ Main Street, City, State, Country"
            />
          </div>
        </div>

        <div className="flex flex-col items-center w-full max-w-lg py-3">
          <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <IoLogoInstagram />
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+ Instagram"
            />
          </div>
        </div>

        <div className="flex flex-col items-center w-full max-w-lg">
          <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <BiWorld />
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+ Website"
            />
          </div>
        </div>

        <div className="flex flex-col items-center w-full max-w-lg py-3">
          <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <TiSocialFacebook />
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+ Facebook"
            />
          </div>
        </div>

        <div className="flex sm:flex-row justify-between sm:space-x-4 w-full pt-10">
          <div className="flex items-center space-x-2">
            <FaArrowLeft className="text-darkblue text-sm" />
            <button className=" text-darkblue font-semibold text-xl">
              Back
            </button>
          </div>
          <button className="flex items-center bg-darkblue text-white font-semibold text-sm rounded-full py-1.5 px-5">
            PUBLISH YOUR DIGITAL CARD <FaArrowRight className="ml-2 text-xs" />
          </button>
        </div>

      </form>
    </div>
  );
}

export default Profile_content;
