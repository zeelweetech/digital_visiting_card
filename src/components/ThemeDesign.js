import React from "react";
import phone from "../assets/image/phone.png";
import avatar from "../assets/image/avatar.png";
import preview_logo from "../assets/image/preview_logo.png";
import { FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ThemeDesign({ setSelectTheme, selectTheme, setPage }) {
  const navigate = useNavigate();

  const mobile = [
    {
      themeBackgroundColor: (
        <img
          src={phone}
          className="relative rounded-b1 w-36 h-19 bg-theme"
          alt="Not Found"
        />
      ),
      skeleton: (
        <div className="h-2.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
      ),
      skeleton1: (
        <div className="h-1.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24"></div>
      ),
      button: (
        <button className=" bg-neutral-700 mt-1.5 rounded-full py-2 px-p3"></button>
      ),
      theme_name: "Light",
    },
    {
      themeBackgroundColor: (
        <img
          src={phone}
          className="relative rounded-b1 w-36 h-19 bg-black"
          alt="Not Found"
        />
      ),
      skeleton: (
        <div className="h-2.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
      ),
      skeleton1: (
        <div className="h-1.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24"></div>
      ),
      skeleton2: (
        <div className="h-2 bg-zinc-900 rounded-full dark:bg-gray-700 w-24 mt-2"></div>
      ),
      button: (
        <button className=" bg-neutral-700 mt-1.5 rounded-full py-2 px-p3"></button>
      ),
      theme_name: "Dark",
    },
    {
      themeBackgroundColor: (
        <img
          src={phone}
          className="relative rounded-b1 w-36 h-19 bg-theme1"
          alt="Not Found"
        />
      ),
      skeleton: (
        <div className="h-2.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
      ),
      skeleton1: (
        <div className="h-1.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24"></div>
      ),
      button: (
        <button className=" bg-neutral-700 mt-1.5 rounded-full py-2 px-p3"></button>
      ),
      theme_name: "Neutral",
    },
    {
      themeBackgroundColor: (
        <img
          src={phone}
          className="relative rounded-b1 w-36 h-19 bg-theme2"
          alt="Not Found"
        />
      ),
      skeleton: (
        <div className="h-2.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
      ),
      skeleton1: (
        <div className="h-1.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24"></div>
      ),
      button: (
        <button className=" bg-white mt-1.5 rounded-full py-2 px-p3"></button>
      ),
      theme_name: "Gradient",
    },
    {
      themeBackgroundColor: (
        <img
          src={phone}
          className="relative rounded-b1 w-36 h-19 bg-custom-gradient"
          alt="Not Found"
        />
      ),
      skeleton: (
        <div className="h-2.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
      ),
      skeleton1: (
        <div className="h-1.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24"></div>
      ),
      button: (
        <button className=" bg-white mt-1.5 rounded-full py-2 px-p3"></button>
      ),
      theme_name: "Energetic",
    },
    {
      themeBackgroundColor: (
        <img
          src={phone}
          className="relative rounded-b1 w-36 h-19 bg-custom1-gradient"
          alt="Not Found"
        />
      ),
      skeleton: (
        <div className="h-2.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
      ),
      skeleton1: (
        <div className="h-1.5 bg-zinc-900 rounded-full dark:bg-gray-700 w-24"></div>
      ),
      button: (
        <button className=" bg-blue-600 mt-1.5 rounded-full py-2 px-p3"></button>
      ),
      theme_name: "Ambitious",
    },
  ];

  return (
    <div className="flex justify-center">
      <div>
        <p className="text-3xl font-semibold text-center">
          Choose a Pesonal Card Design
        </p>
        <p className="text-center">Your brand colors</p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {mobile.map((data) => (
            <div>
              <div className="flex flex-col items-center w-full max-w-md mt-4">
                <p className={`${data.themeBackgroundColor}`}>
                  {data.themeBackgroundColor}
                </p>

                {/* <div className="absolute bg-white rounded-xl shadow-xl w-p7 h-24 flex justify-center mt-5">
                  <img
                    src={preview_logo}
                    className="w-12 h-14 mt-2"
                    alt="Not Found"
                  />
                </div> */}
                <div className="bg-white shadow-xl w-p7 h-28 rounded-xl flex flex-col justify-center absolute mt-m4">
                  <div className="flex justify-center">
                    <img
                      src={avatar}
                      className="rounded-full border-4 border-white w-16 h-16 -mt-m4 flex"
                      alt="Not Found"
                    />
                  </div>
                  <div
                    role="status"
                    className="max-w-sm animate-pulse mt-2 ml-3"
                  >
                    {data.skeleton}
                    {data.skeleton1}
                    {data.skeleton2}
                  </div>
                </div>
                <div className="absolute flex flex-col mt-60">
                  {data.button}
                  {data.button}
                </div>
              </div>

              <div className="text-center mt-4">
                <input
                  type="radio"
                  name="theme"
                  value={data.theme_name}
                  checked={selectTheme === data.theme_name}
                  onChange={() => {
                    setSelectTheme(data.theme_name);
                  }}
                  className="w-5 h-5 custom-radio"
                />
                <br />
                <label className="text-xl font-semibold">
                  {data.theme_name}
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-10 mb-5">
          <div className="flex items-center space-x-2">
            <FaArrowLeft className="text-darkblue text-sm" />
            <button
              className=" text-darkblue font-semibold text-xl"
              onClick={() => navigate("/home_page")}
            >
              Back
            </button>
          </div>
          <button
            className="flex items-center bg-blue-500 text-white font-semibold px-14 py-2 rounded-full"
            onClick={() => {
              selectTheme
                ? setPage(1)
                : toast.error("please select theme color");
            }}
          >
            NEXT <FaArrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThemeDesign;
