import React from "react";
import phone from "../../../assets/image/phone.png";
import businesswomen from "../../../assets/image/businesswomen.webp";
import { FaRegAddressCard } from "react-icons/fa";
import {
  IoCallOutline,
  IoMailOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { LuTable } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { PiDevicesLight } from "react-icons/pi";
import { CiMobile4 } from "react-icons/ci";
import { AiOutlineQrcode } from "react-icons/ai";

function PersonalLinksCard() {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen overflow-hidden`}
    >
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <div className={`${phone ? "100vh" : ""}`}>
        <div className="absolute">
          <img
            src={phone}
            className="hidden md:block rounded-2 w-80 h-30"
            alt="Not Found"
          />
        </div>
        <div className="relative px-p5 pt-7">
          <div
            className={`bg-violet-500 w-17 rounded-3xl text-center mt-24 mb-2 py-8`}
          >
            <img
              src={businesswomen}
              //   values?.image
              //     ? URL.createObjectURL(values?.image)
              //     : cardData?.image
              //     ? cardData?.image
              //     : avatar
              // }
              className="rounded-full border-4 border-white w-36 h-36 absolute left-1/2 -mt-10 transform -translate-x-1/2 -translate-y-1/2"
              style={{ boxShadow: "0 1px 2px 0 #ffffff, 0 1px 5px 0 #ffffff" }}
              alt="Not Found"
            />
            <div className="relative">
              <button
                type="button"
                className="bg-white rounded-full p-1 ml-24 -mt-40"
              >
                <IoShareSocialOutline />
              </button>
            </div>
            <div className="overflow-y-auto overflow-x-hidden overscroll-y-hidden text-white">
              <div className="flex justify-center">
                <p className="text-3xl font-semibold pt-5 w-32">
                  {/* {values?.name
                    ? values?.name
                    : cardData?.name
                    ? cardData?.name
                    : "Noah Miller"} */}
                  Johannes GutMann
                </p>
              </div>
              <p className="text-base pt-2">
                {/* {values?.title
                    ? values?.title
                    : cardData?.title
                    ? cardData?.title
                    : "Title"} */}
                Title
              </p>
            </div>
          </div>

          <div className="flex justify-around bg-white shadow-xl mx-1 my-3 py-3">
            <div className="flex flex-col items-center">
              <button type="button">
                <FaRegAddressCard className="text-3xl" />
              </button>
              <p className="text-xs w-16 text-center">uuuu aaaaaaaa</p>
            </div>
            <div className="flex flex-col items-center">
              <button type="button">
                <IoCallOutline className="text-3xl" />
              </button>
              <p className="text-xs">calling</p>
            </div>
            <div className="flex flex-col items-center">
              <button type="button">
                <LuTable className="text-3xl" />
              </button>
              <p className="text-xs">aaaaaaaaa</p>
            </div>
          </div>

          <div className="bg-white shadow-xl mx-1 py-3">
            <p className="text-lg font-semibold px-3 pb-2">Links</p>
            <div className="grid grid-cols-3 gap-y-5">
              <div className="flex flex-col items-center">
                <button type="button">
                  <MdAlternateEmail className="text-3xl" />
                </button>
                <p className="text-xs w-16 text-center">uuuuuu</p>
              </div>
              <div className="flex flex-col items-center">
                <button type="button">
                  <PiDevicesLight className="text-3xl" />
                </button>
                <p className="text-xs">calling</p>
              </div>
              <div className="flex flex-col items-center">
                <button type="button">
                  <IoMailOutline className="text-3xl" />
                </button>
                <p className="text-xs">aaaaaaaaa</p>
              </div>
              <div className="flex flex-col items-center">
                <button type="button">
                  <CiMobile4 className="text-3xl" />
                </button>
                <p className="text-xs">aaaaaaaaa</p>
              </div>
              <div className="flex flex-col items-center">
                <button type="button">
                  <AiOutlineQrcode className="text-3xl" />
                </button>
                <p className="text-xs">aaaaaaaaa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default PersonalLinksCard;
