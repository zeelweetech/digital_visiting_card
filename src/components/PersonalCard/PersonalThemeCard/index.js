import React from "react";
import phone from "../../../assets/image/phone.png";
import triper from "../../../assets/image/triper.webp";
import businessmen from "../../../assets/image/businessmen.jpg";
import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaMapMarker } from "react-icons/fa";

function PersonalThemeCard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="absolute">
          <img
            src={phone}
            className="hidden md:block w-80 h-30"
            alt="Not Found"
          />
        </div>
        <div className="relative">
          <img src={triper} className="w-80 h-40 px-p8 mt-10" alt="Not Found" />
          <div className="flex justify-center">
            <div className="text-center">
              <div className="flex justify-center">
                <img
                  src={businessmen}
                  className="w-32 h-32 rounded-full shadow-xl border-4 border-white -mt-16"
                  alt="Not Found"
                />
              </div>
              <p className="text-2xl font-semibold mt-3">Alex Thomson</p>
              <p>Director</p>
              <p>Company name</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center px-7 space-x-3">
              <button className="bg-zinc-900 text-white rounded-full p-2">
                <IoMdMail />
              </button>
              <p>hello@gmail.com</p>
            </div>
            <div className="flex items-center px-7 space-x-3">
              <button className="bg-zinc-900 text-white rounded-full p-2">
                <MdCall />
              </button>
              <p>+31 61166 87576</p>
            </div>
            <div className="flex items-center px-7 space-x-3">
              <button className="bg-zinc-900 text-white rounded-full p-2">
                <TbWorld />
              </button>
              <p>www.acmenet.com</p>
            </div>
            <div className="flex items-start px-7 space-x-3">
              <button className="bg-zinc-900 text-white rounded-full p-2">
                <FaMapMarker />
              </button>
              <p className="w-52 text-sm">
                Acme LTD 1131 AW Amstertlam, The Netherlands
              </p>
            </div>

            <div className="px-p5">
              <button
                type="button"
                className="bg-blue-600 py-2 px-20 mt-3 rounded-full text-white font-semibold"
              >
                Add to contacts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalThemeCard;
