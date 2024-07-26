import React from "react";
import logo from "../assets/image/logo.png";
import avatar from "../assets/image/avatar.png";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { HiOutlineMapPin } from "react-icons/hi2";
import { Link } from "react-router-dom";

function PersonalCardPreview() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="flex flex-col items-center w-full max-w-md relative">
        <div className="rounded-3xl w-80 h-30 bg-white shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-indigo-800 h-64 rounded-se-3xl rounded-tl-3xl p-3">
            {/* <img src={logo} className="w-16 h-4" alt="Not Found" /> */}
            <div className="flex justify-center text-center pt-5">
              <div>
                <img
                  src={avatar}
                  className="w-24 h-24 rounded-full"
                  alt="Not Found"
                />
                <p className="text-2xl text-white pt-2">Name</p>
                <p className="text-white">Title</p>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly -mt-5">
            <button className="bg-white text-2xl rounded-full p-2">
              <IoCallOutline />
            </button>
            <button className="bg-white text-2xl rounded-full p-2">
              <CiMail />
            </button>
            <button className="bg-white text-2xl rounded-full p-2">
              <HiOutlineMapPin />
            </button>
          </div>

          <div className="mt-8 px-3">
            <p>
              Description : Luxury Auto Dealership Over 9 years of experience in
              auto sales.
            </p>
            <div className="my-4">
              <p>Mobile</p>
              <p>+1 87865 65480</p>
              <p>Work</p>
              <p>+1 67456 68565</p>
            </div>
            <p>Email</p>
            <p>digitalcard@gmail.com</p>
            <p className="mt-4">Website</p>
            <Link className="text-blue-800">https://mcgee.com</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalCardPreview;
