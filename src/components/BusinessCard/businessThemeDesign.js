import React from "react";
import { CiMail } from "react-icons/ci";
import avatar from "../../assets/image/avatar.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function BusinessThemeDesign({ selectTheme, setSelectTheme, setPage }) {
  const navigate = useNavigate();

  const PersonalCard = [
    {
      NameSkeleton: (
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-16 mt-3 my-2"></div>
      ),
      TitleSkeleton: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton: (
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-24 my-2"></div>
      ),
      Skeleton1: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton2: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28 mt-5 my-2"></div>
      ),
      Skeleton3: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
      ),
      Skeleton4: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mt-5 my-2"></div>
      ),
      Skeleton5: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28"></div>
      ),
      theme_name: "Light",
      backgroundColor: "bg-theme",
    },
    {
      NameSkeleton: (
        <div className="h-2.5 bg-white rounded-full dark:bg-gray-700 w-16 mt-3 my-2"></div>
      ),
      TitleSkeleton: (
        <div className="h-2 bg-white rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton: (
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-24 my-2"></div>
      ),
      Skeleton1: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton2: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28 mt-5 my-2"></div>
      ),
      Skeleton3: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
      ),
      Skeleton4: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mt-5 my-2"></div>
      ),
      Skeleton5: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28"></div>
      ),
      theme_name: "Dark",
      backgroundColor: "bg-black",
    },
    {
      NameSkeleton: (
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-16 mt-3 my-2"></div>
      ),
      TitleSkeleton: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton: (
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-24 my-2"></div>
      ),
      Skeleton1: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton2: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28 mt-5 my-2"></div>
      ),
      Skeleton3: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
      ),
      Skeleton4: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mt-5 my-2"></div>
      ),
      Skeleton5: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28"></div>
      ),
      theme_name: "Neutral",
      backgroundColor: "bg-theme1",
    },
    {
      NameSkeleton: (
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-16 mt-3 my-2"></div>
      ),
      TitleSkeleton: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton: (
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-24 my-2"></div>
      ),
      Skeleton1: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton2: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28 mt-5 my-2"></div>
      ),
      Skeleton3: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
      ),
      Skeleton4: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mt-5 my-2"></div>
      ),
      Skeleton5: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28"></div>
      ),
      theme_name: "Gradient",
      backgroundColor: "bg-theme2",
    },
    {
      NameSkeleton: (
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-16 mt-3 my-2"></div>
      ),
      TitleSkeleton: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton: (
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-24 my-2"></div>
      ),
      Skeleton1: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton2: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28 mt-5 my-2"></div>
      ),
      Skeleton3: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
      ),
      Skeleton4: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mt-5 my-2"></div>
      ),
      Skeleton5: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28"></div>
      ),
      theme_name: "Energetic",
      backgroundColor: "bg-custom-gradient",
    },
    {
      NameSkeleton: (
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-16 mt-3 my-2"></div>
      ),
      TitleSkeleton: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton: (
        <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-24 my-2"></div>
      ),
      Skeleton1: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 w-12"></div>
      ),
      Skeleton2: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28 mt-5 my-2"></div>
      ),
      Skeleton3: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
      ),
      Skeleton4: (
        <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mt-5 my-2"></div>
      ),
      Skeleton5: (
        <div className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-700 w-28"></div>
      ),
      theme_name: "Ambitious",
      backgroundColor: "bg-custom1-gradient",
    },
  ];

  return (
    <div className="flex justify-center">
      <div>
        <p className="text-3xl font-semibold text-center">
          Choose a Business card Design
        </p>
        <p className="text-center">Your brand colors</p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {PersonalCard.map((CardData) => (
            <div className="">
              <div className="shadow-lg">
                <div
                  className={`${CardData.backgroundColor} h-36 rounded-se-xl rounded-tl-xl p-3`}
                >
                  <div className="flex justify-center text-center pt-1">
                    <div>
                      <img src={avatar} className="w-16 h-16" alt="Not Found" />
                      <div role="status" className="max-w-sm animate-pulse">
                        {CardData.NameSkeleton}
                        {CardData.TitleSkeleton}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-evenly -mt-2.5">
                  <button className="bg-white text-sm rounded-full p-0.5">
                    <IoCallOutline />
                  </button>
                  <button className="bg-white text-sm rounded-full p-0.5">
                    <CiMail />
                  </button>
                  <button className="bg-white text-sm rounded-full p-0.5">
                    <HiOutlineMapPin />
                  </button>
                </div>

                <div
                  role="status"
                  className="max-w-sm animate-pulse pt-2 pb-2 px-2"
                >
                  {CardData.Skeleton}
                  {CardData.Skeleton1}
                  {CardData.Skeleton2}
                  {CardData.Skeleton3}
                  {CardData.Skeleton4}
                  {CardData.Skeleton5}
                </div>
              </div>
              <div className="text-center mt-4">
                <input
                  type="radio"
                  name="theme"
                  value={CardData.theme_name}
                  checked={selectTheme === CardData.theme_name}
                  onChange={() => {
                    setSelectTheme(CardData.theme_name);
                  }}
                  className="w-5 h-5 custom-radio"
                />
                <br />
                <label className="text-xl font-semibold">
                  {CardData.theme_name}
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

export default BusinessThemeDesign;
