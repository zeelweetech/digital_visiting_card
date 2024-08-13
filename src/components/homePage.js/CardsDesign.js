import React from "react";
import avatar from "../../assets/image/avatar.png";
import businessmen from "../../assets/image/businessmen.jpg";
import facebook from "../../assets/image/Facebook.webp";
import instagram from "../../assets/image/instagram.jpeg";
import linkedin from "../../assets/image/linkedin.png";
import paypal from "../../assets/image/paypal.webp";
import phone from "../../assets/image/phone.png";
import triper from "../../assets/image/triper.webp";
import businesswomen from "../../assets/image/businesswomen.webp";
import location from "../../assets/image/location.png";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoLogoInstagram, IoMdDownload, IoMdMail } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FiMapPin, FiPhone, FiPhoneCall } from "react-icons/fi";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { MdCall, MdLocalPhone, MdOutlinePersonAddAlt } from "react-icons/md";
import {
  FaInstagram,
  FaMapMarker,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegAddressCard,
  FaWhatsapp,
} from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { SlPaypal } from "react-icons/sl";
import { TfiWorld } from "react-icons/tfi";
import { PiFacebookLogoBold, PiLinkedinLogo } from "react-icons/pi";

function CardsDesign({ cardDetails }) {
  const navigate = useNavigate();
  console.log("cardDetails : ", cardDetails);
  return (
    <div className="flex justify-center py-5 px-1 md:p-7">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-y-10 gap-x-4 md:gap-x-9 md:gap-y-9 2xl:gap-x-40 xl:gap-x-40">
        {cardDetails?.map((item, index) => (
          <div>
            {item?.cardName === "PersonalBusinessCard" ? (
              <div
                className="rounded-2xl hover:cursor-pointer w-40 h-[22rem] md:w-52 md:h-[26rem] bg-white shadow-xl scrollable-container overflow-y-auto overflow-x-hidden"
                onClick={() => {
                  if (item?.cardName === "PersonalBusinessCard") {
                    navigate(
                      `/PersonalBusinessCard/${item?.name}/${item?.personalCardId}`
                    );
                  }
                }}
              >
                <div className="h-44 rounded-se-2xl rounded-tl-2xl bg-[#172554]">
                  <div className="flex flex-col justify-center items-center text-center pt-7">
                    <div className="flex justify-center">
                      <img
                        src={item?.image}
                        className="w-16 h-16 rounded-full"
                        alt="Not Found"
                      />
                    </div>
                    <div className="h-12 scrollable-container overflow-y-auto overflow-x-hidden">
                      <div className="flex justify-center">
                        <p className="text-sm mt-2 w-56 text-[#eab308]">
                          {item?.name}
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p className="w-40 text-xs text-[#eab308]">
                          {item?.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-evenly -mt-3.5 text-lg">
                  <button className="bg-white rounded-full p-1">
                    <FiPhone />
                  </button>
                  <button className="bg-white rounded-full p-1">
                    <CiMail />
                  </button>
                  <button className="bg-white rounded-full p-1">
                    <HiOutlineMapPin />
                  </button>
                </div>

                <div className="px-3 text-xs">
                  <div className="my-2">
                    <p>Mobile</p>
                    <Link className="cursor-pointer text-blue-800 break-words">
                      {item?.phone}
                    </Link>
                  </div>

                  <div className="mb-6">
                    <p>Email</p>
                    <Link className="cursor-pointer text-blue-800">
                      {item?.email}
                    </Link>
                  </div>

                  <div>
                    <p className="mt-8 md:mt-4">Website</p>
                    <Link className="text-blue-800 font-semibold cursor-pointer break-words line-clamp-1">
                      {item?.website}
                    </Link>
                  </div>
                </div>

                <p className="text-center mt-3 font-semibold text-sm md:text-lg">
                  Connect with me on
                </p>

                <div className="flex items-center justify-evenly px-6 mt-1">
                  <img
                    src={facebook}
                    className="w-6 md:w-9 h-6 md:h-9"
                    alt="Not Foung"
                  />
                  <img
                    src={instagram}
                    className="w-6 md:w-9 h-6 md:h-9"
                    alt="Not Foung"
                  />
                  <img
                    src={linkedin}
                    className="w-6 md:w-9 h-6 md:h-9"
                    alt="Not Foung"
                  />
                  <img
                    src={paypal}
                    className="w-6 md:w-10 h-6 md:h-10"
                    alt="Not Foung"
                  />
                </div>
              </div>
            ) : item?.cardName === "PersonalContactCard" ? (
              <div
                className="flex overflow-y-hidden hover:cursor-pointer"
                onClick={() => {
                  if (item?.cardName === "PersonalContactCard") {
                    navigate(
                      `/PersonalContactCard/${item?.name}/${item?.personalCardId}`
                    );
                  }
                }}
              >
                <div className="absolute">
                  <img
                    src={phone}
                    className="w-40 md:w-52 h-[22rem] md:h-[26rem]"
                    alt="Phone"
                  />
                </div>
                <div className="absolute w-40 md:w-52">
                  <div className="h-full">
                    <svg
                      style={{
                        transform: "rotate(180deg)",
                        transition: "0.3s",
                      }}
                      viewBox="1110 0 200 145"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[10.1rem] md:w-52 px-1.5 md:px-[0.4rem] h-auto rounded-[1.2rem] md:rounded-[1.7rem] mt-1"
                    >
                      <defs>
                        <linearGradient id="sw-gradient-0">
                          <stop stop-color={"#00ffec"} offset="0%"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        style={{ transform: "translate(0, 0px)", opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,98L26.7,89.8C53.3,82,107,65,160,57.2C213.3,49,267,49,320,98C373.3,147,427,245,480,310.3C533.3,376,587,408,640,367.5C693.3,327,747,212,800,187.8C853.3,163,907,229,960,220.5C1013.3,212,1067,131,1120,89.8C1173.3,49,1227,49,1280,81.7C1333.3,114,1387,180,1440,171.5C1493.3,163,1547,82,1600,57.2C1653.3,33,1707,65,1760,114.3C1813.3,163,1867,229,1920,277.7C1973.3,327,2027,359,2080,334.8C2133.3,310,2187,229,2240,220.5C2293.3,212,2347,278,2400,285.8C2453.3,294,2507,245,2560,204.2C2613.3,163,2667,131,2720,138.8C2773.3,147,2827,196,2880,179.7C2933.3,163,2987,82,3040,40.8C3093.3,0,3147,0,3200,24.5C3253.3,49,3307,98,3360,171.5C3413.3,245,3467,343,3520,318.5C3573.3,294,3627,147,3680,73.5C3733.3,0,3787,0,3813,0L3840,0L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"
                      ></path>
                    </svg>
                    <div className="relative -mt-16">
                      <div className="absolute top-0 ml-[3.3rem] md:ml-[4.5rem] -mt-6 md:-mt-9 text-center">
                        <img
                          src={item?.image}
                          className="w-16 h-16 rounded-full border-4 border-white women"
                          alt="Not Found"
                        />
                      </div>
                      <div className="scrollable-container h-[16.4rem] md:h-[18.25rem] overflow-y-auto overflow-x-hidden">
                        <div className="text-center">
                          <p className="pt-10 md:pt-8 text-xs md:text-base font-semibold text-[#0d9488]">
                            {item?.name}
                          </p>
                          <div className="flex justify-center text-xs">
                            <p className="my-2 w-36 md:w-17 text-[#14b8a6]">
                              {item?.title}
                            </p>
                          </div>
                          <div className="flex justify-center">
                            <p className="w-36 md:w-48 break-words text-xs px-2 line-clamp-2">
                              {item?.description}
                            </p>
                          </div>

                          <div className="flex px-3 md:px-5 items-start mt-6 text-sm">
                            <button className="text-base p-1.5 rounded-full bg-[#ccfbf1] text-[#14b8a6]">
                              <FiPhoneCall />
                            </button>
                            <div className="text-start ml-1.5">
                              <p className="font-semibold line-clamp-1 md:line-clamp-none">
                                {item?.phone}
                              </p>
                              <p>Work</p>
                            </div>
                          </div>
                          <div className="flex items-start px-3 md:px-5 py-2 text-xs">
                            <button className="text-base p-1.5 rounded-full bg-[#ccfbf1] text-[#14b8a6]">
                              <IoMailOutline />
                            </button>
                            <div className="text-start ml-1.5">
                              <p className="font-semibold break-words w-24 md:w-36 line-clamp-1 md:line-clamp-none">
                                {item?.email}
                              </p>
                              <p>Work</p>
                            </div>
                          </div>
                          <div className="flex items-start px-3 md:px-5 text-xs">
                            <button className="text-base p-1.5 rounded-full bg-[#ccfbf1] text-[#14b8a6]">
                              <TbWorld />
                            </button>
                            <div className="text-start ml-1.5">
                              <p className="font-semibold break-words w-24 md:w-44 line-clamp-1 md:line-clamp-none">
                                {item?.website}
                              </p>
                              <p>Company</p>
                            </div>
                          </div>

                          <div className="mt-3">
                            <p className="text-xs md:text-base">
                              Connect with me on
                            </p>
                            <div className="flex justify-evenly px-6 md:px-16">
                              <img
                                src={location}
                                className="w-8 h-8 bg-white shadow-lg p-1 rounded-full hover:cursor-pointer"
                                alt="Not Found"
                                offset="0%"
                              />
                              <img
                                src={instagram}
                                className="w-8 h-8 bg-white shadow-lg p-1 rounded-full hover:cursor-pointer"
                                alt="Not Found"
                              />
                              <img
                                src={facebook}
                                className="w-8 h-8 bg-white shadow-lg p-1 rounded-full hover:cursor-pointer"
                                alt="Not Found"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-1 md:px-2">
                        <button className="flex bg-[#00ffec] text-[#ffffff] justify-center items-center font-semibold w-[9.4rem] md:w-48 py-1.5 rounded-b-2xl hover:cursor-pointer">
                          <MdOutlinePersonAddAlt className="mr-2" />
                          Add to Contacts
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : item?.cardName === "PersonalDetailsCard" ? (
              <div
                className="flex h-full hover:cursor-pointer"
                onClick={() => {
                  if (item?.cardName === "PersonalDetailsCard") {
                    navigate(
                      `/PersonalDetailsCard/${item?.name}/${item?.personalCardId}`
                    );
                  }
                }}
              >
                <div>
                  <img
                    src={phone}
                    className="absolute w-40 h-[22rem] md:w-52 md:h-[26rem]"
                    alt="Not Found"
                  />
                  <div className="relative w-40 md:w-52 flex justify-center text-center items-center px-4 md:px-6 pt-6">
                    <div className="h-80 md:h-[24rem] scrollable-container overflow-y-auto overflow-x-hidden">
                      <div className="flex justify-center text-center">
                        <img
                          src={item?.image}
                          className="w-16 h-16 md:w-24 md:h-24"
                          alt="Not Found"
                        />
                      </div>
                      <p className="text-xs md:text-base font-semibold w-32 md:w-[10rem] break-words">
                        {item?.name}
                      </p>
                      <div className="flex justify-center">
                        <p className="font-semibold text-xs w-52 break-words">
                          {item?.title}
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p className="font-semibold text-xs w-52 break-words">
                          Company Name
                        </p>
                      </div>

                      <div className="space-x-1.5 md:space-x-2 mt-3">
                        <button className="bg-theme p-1 text-xs md:text-base">
                          <FaPhoneAlt />
                        </button>
                        <button className="bg-theme p-1 text-xs md:text-base">
                          <IoMdMail />
                        </button>
                        <button className="bg-theme p-1 text-xs md:text-base">
                          <FaWhatsapp />
                        </button>
                        <button className="bg-theme p-1 text-xs md:text-base">
                          <FaMapMarkerAlt />
                        </button>
                        <button className="bg-theme p-1 text-xs md:text-base">
                          <BiWorld />
                        </button>
                      </div>

                      <div className="bg-slate-200 p-1 mt-3 md:mt-5">
                        <div className="flex items-start bg-theme pt-1 pb-1.5 px-2 text-start space-x-2 mt-1">
                          <button className="bg-white p-1 text-base">
                            <FaPhoneAlt />
                          </button>
                          <div className="text-sm flex-1">
                            <p className="font-semibold">Phone</p>
                            <p className="line-clamp-1 w-24">{item?.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start bg-theme pt-1 pb-1.5 px-2 text-start space-x-2 mt-1">
                          <button className="bg-white p-1 text-base">
                            <IoMdMail />
                          </button>
                          <div className="text-sm flex-1">
                            <p className="font-semibold">Email</p>
                            <p className="line-clamp-1 w-24">{item?.email}</p>
                          </div>
                        </div>
                        <div className="flex items-start bg-theme pt-1 pb-1.5 px-2 text-start space-x-2 mt-1">
                          <button className="bg-white p-1 text-base">
                            <FaWhatsapp />
                          </button>
                          <div className="text-sm flex-1">
                            <p className="font-semibold">Whatsapp</p>
                            <p className="line-clamp-1 w-24">{item?.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start bg-theme pt-1 pb-1.5 px-2 text-start space-x-2 mt-1">
                          <button className="bg-white p-1 text-base">
                            <BiWorld />
                          </button>
                          <div className="text-sm flex-1">
                            <p className="font-semibold">Website</p>
                            <p className="line-clamp-1 w-24">{item?.website}</p>
                          </div>
                        </div>
                        <div className="flex items-start bg-theme pt-1 pb-1.5 px-2 text-start space-x-2 mt-1">
                          <button className="bg-white p-1 text-base">
                            <FaMapMarkerAlt />
                          </button>
                          <div className="text-sm flex-1">
                            <p className="font-semibold">Address</p>
                            <p className="line-clamp-1 w-[5rem]">
                              {item?.address}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <button className="flex items-center font-semibold bg-blue-950 text-xs text-white px-1 md:px-3 py-1 md:py-1 mt-2 md:mt-2 rounded-sm">
                          Save To Phone
                          <IoMdDownload className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : item?.cardName === "PersonalLinksCard" ? (
              <div
                className="flex flex-col overflow-hidden hover:cursor-pointer"
                onClick={() => {
                  if (item?.cardName === "PersonalLinksCard") {
                    navigate(
                      `/PersonalLinksCard/${item?.name}/${item?.personalCardId}`
                    );
                  }
                }}
              >
                <div className="w-40 md:w-52">
                  <div className="left-0">
                    <img
                      src={phone}
                      className="absolute w-40 h-[22rem] md:w-52 md:h-[26rem]"
                      alt="Not Found"
                    />
                  </div>
                  <div className="relative px-2 md:px-4 pt-12 mt-5 h-[20rem] md:h-[24rem] scrollable-container overflow-y-auto overflow-x-hidden">
                    <div className="bg-[#8b5cf6] w-36 md:w-44 rounded-2xl text-center mb-2 py-2">
                      <img
                        src={item?.image}
                        className="rounded-full border-4 border-white w-[5rem] h-[5rem] -mt-14 mx-auto"
                        style={{
                          boxShadow: "0 1px 2px 0 #ffffff, 0 1px 5px 0 #ffffff",
                        }}
                        alt="Not Found"
                      />
                      <div className="text-center text-[#ffffff]">
                        <div className="flex justify-center">
                          <p className="text-xl w-40 font-semibold my-1">
                            {item?.name}
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-base w-52 break-words">
                            {item?.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-around bg-white shadow-xl my-2 py-1 w-36 md:w-44">
                      <div className="flex flex-col items-center mb-4">
                        <button type="button">
                          <FaRegAddressCard className="text-lg" />
                        </button>
                        <p className="text-xs text-center mt-2">Address</p>
                      </div>
                      <div className="flex flex-col items-center mb-4">
                        <button type="button">
                          <IoCallOutline className="text-lg" />
                        </button>
                        <p className="text-xs text-center mt-2">Calling</p>
                      </div>
                      <div className="flex flex-col items-center mb-4">
                        <button type="button">
                          <IoMailOutline className="text-lg" />
                        </button>
                        <p className="text-xs text-center mt-2">Email</p>
                      </div>
                    </div>

                    <div className="bg-white shadow-xl py-1 w-36 md:w-44">
                      <p className="text-sm font-semibold px-4 pb-2">Links</p>
                      <div className="grid grid-cols-2 md:grid-cols-3">
                        <div className="flex flex-col items-center mb-2">
                          <button type="button">
                            <FaInstagram className="text-lg" />
                          </button>
                          <p className="text-xs text-center mt-1">Instagram</p>
                        </div>
                        <div className="flex flex-col items-center mb-2">
                          <button type="button">
                            <PiFacebookLogoBold className="text-lg" />
                          </button>
                          <p className="text-xs text-center mt-1">Facebook</p>
                        </div>
                        <div className="flex flex-col items-center mb-2">
                          <button type="button">
                            <PiLinkedinLogo className="text-lg" />
                          </button>
                          <p className="text-xs text-center mt-1">Linkedin</p>
                        </div>
                        <div className="flex flex-col items-center mb-2">
                          <button type="button">
                            <TfiWorld className="text-lg" />
                          </button>
                          <p className="text-xs text-center mt-1">Website</p>
                        </div>
                        <div className="flex flex-col items-center mb-2">
                          <button type="button">
                            <SlPaypal className="text-lg" />
                          </button>
                          <p className="text-xs text-center mt-1">PayPal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : item?.cardName === "PersonalPreviewCard" ? (
              <div
                className="flex h-full md:h-full hover:cursor-pointer"
                onClick={() => {
                  if (item?.cardName === "PersonalPreviewCard") {
                    navigate(
                      `/PersonalPreviewCard/${item?.name}/${item?.personalCardId}`
                    );
                  }
                }}
              >
                <div className="rounded-3xl h-[22rem] md:h-[26rem]">
                  <div className="absolute">
                    <img
                      src={phone}
                      className="w-40 h-[22rem] md:w-52 md:h-[26rem] bg-custom-gradient rounded-3xl"
                      alt="Not Found"
                    />
                  </div>
                  <div className="scrollable-container h-80 md:h-96 overflow-x-hidden relative mt-6 px-3 md:px-4">
                    <img
                      src={item?.image}
                      className="rounded-full border-4 border-white w-[5rem] h-[5rem] md:w-24 md:h-24 mt-14 absolute left-20 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      alt="Not Found"
                    />
                    <div className="bg-gray-200 w-[8.4rem] md:w-44 rounded-xl flex flex-col justify-center text-center mt-14">
                      <div>
                        <p className="text-xl pt-12 mt-2">{item?.name}</p>
                        <p className="text-base">{item?.title}</p>
                        <p className="text-base">Company Name</p>
                        <p className="pt-3 text-xs leading-5 px-3 break-words line-clamp-3">
                          {item?.address}
                        </p>
                      </div>
                    </div>

                    <button className="bg-neutral-700 text-xs text-white font-semibold mt-3 py-2 w-[8.4rem] md:w-44  rounded-full shadow-md flex items-center">
                      <CiMail className="ml-4" />
                      <span className="flex-1 text-center">Email</span>
                    </button>
                    <button className="bg-neutral-700 text-xs text-white font-semibold my-2 py-2 w-[8.4rem] md:w-44 rounded-full shadow-md flex items-center">
                      <MdLocalPhone className="ml-4" />
                      <span className="flex-1 text-center">phone</span>
                    </button>
                    <button className="bg-neutral-700 text-xs text-white font-semibold py-2 w-[8.4rem] md:w-44 rounded-full shadow-md flex items-centero">
                      <FiMapPin className="ml-4" />
                      <span className="flex-1 text-center">Address</span>
                    </button>
                    <button className="bg-neutral-700 text-xs text-white font-semibold my-2 py-2 w-[8.4rem] md:w-44 rounded-full shadow-md flex items-center overflow-auto">
                      <IoLogoInstagram className="ml-4" />
                      <span className="flex-1 text-center">Instagram</span>
                    </button>
                    <button className="bg-neutral-700 text-xs text-white font-semibold my-2 py-2 w-[8.4rem] md:w-44 rounded-full shadow-md flex items-center overflow-auto">
                      <BiWorld className="ml-4" />
                      <span className="flex-1 text-center">Website</span>
                    </button>
                    <button className="bg-neutral-700 text-xs text-white font-semibold my-2 py-2 w-[8.4rem] md:w-44 rounded-full shadow-md flex items-center overflow-auto">
                      <TiSocialFacebook className="ml-4" />
                      <span className="flex-1 text-center">Facebook</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : item?.cardName === "PersonalThemeCard" ? (
              <div
                className="flex h-0 md:h-full hover:cursor-pointer"
                onClick={() => {
                  if (item?.cardName === "PersonalThemeCard") {
                    navigate(
                      `/PersonalThemeCard/${item?.name}/${item?.personalCardId}`
                    );
                  }
                }}
              >
                <div>
                  <div className="absolute">
                    <img
                      src={phone}
                      className="w-40 h-[22rem] md:w-52 md:h-[26rem]"
                      alt="Not Found"
                    />
                  </div>
                  <div className="relative w-40 md:w-52 h-80 md:h-[23.6rem] scrollable-container overflow-y-auto overflow-x-hidden mt-7 theme-responsive">
                    <img
                      src={triper}
                      className="w-40 md:w-52 h-24 px-1.5 md:px-2"
                      alt="Not Found"
                    />
                    <div className="flex justify-center">
                      <div className="text-center">
                        <div className="flex justify-center">
                          <img
                            src={item?.image}
                            className="w-16 h-16 md:w-24 md:h-24 rounded-full shadow-xl border-4 border-white -mt-8 md:-mt-11"
                            alt="Not Found"
                          />
                        </div>
                        <div className="flex justify-center">
                          <p className="text-xs md:text-lg font-semibold mt-2 w-full md:w-56 break-words">
                            {item?.name}
                          </p>
                        </div>
                        <p className="w-full md:w-64 break-words text-xs">
                          {item?.title}
                        </p>
                        <p className="w-64 break-words text-xs">Company name</p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-2">
                      <div className="flex items-center px-4 space-x-3">
                        <button className="bg-zinc-900 text-white rounded-full p-1 text-base">
                          <IoMdMail />
                        </button>
                        <p className="text-xs line-clamp-1 md:line-clamp-none">
                          {item?.email}
                        </p>
                      </div>
                      <div className="flex items-center px-4 space-x-3">
                        <button className="bg-zinc-900 text-white rounded-full p-1 text-base">
                          <MdCall />
                        </button>
                        <p className="text-xs line-clamp-1 md:line-clamp-none">
                          {item?.phone}
                        </p>
                      </div>
                      <div className="flex items-center px-4 space-x-3">
                        <button className="bg-zinc-900 text-white rounded-full p-1 text-base">
                          <TbWorld />
                        </button>
                        <p className="break-words w-56 line-clamp-1">
                          {item?.website}
                        </p>
                      </div>
                      <div className="flex items-start px-4 space-x-3">
                        <button className="bg-zinc-900 text-white rounded-full p-1 text-base">
                          <FaMapMarker />
                        </button>
                        <p className="w-52 text-sm line-clamp-1 md:line-clamp-none">
                          {item?.address}
                        </p>
                      </div>

                      <div className="px-2 md:px-6">
                        <button
                          type="button"
                          className="bg-blue-600 text-sm md:text-lg mb-1 py-1 w-36 md:w-40 rounded-full text-white font-semibold"
                        >
                          Add to contacts
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative hover:cursor-pointer" onClick={() => {
                if (item?.cardName === "businesscard") {
                  navigate(
                    `/business_digital_card/${item?.name}/${item?.businessCardId}`
                  );
                }
              }}>
                <div className="rounded-2xl w-40 md:w-52 md:h-[26rem] bg-white shadow-xl h-[22rem] scrollable-container overflow-y-auto overflow-x-hidden">
                  <div className="bg-slate-400 h-44 rounded-t-2xl">
                    <div className="flex justify-center items-center text-center">
                      <div>
                        <div className="flex justify-center">
                          <img
                            src={item?.image}
                            className="w-16 h-16 mt-8"
                            alt="Not Found"
                          />
                        </div>
                        <p className="text-base text-white pt-1">
                          {item?.name}
                        </p>
                        <p className="text-white text-xs line-clamp-1 w-44">
                          {item?.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-evenly -mt-3.5">
                    <button className="bg-white text-lg rounded-full p-1">
                      <HiOutlineMapPin />
                    </button>
                    <button className="bg-white text-lg rounded-full p-1">
                      <IoLogoInstagram />
                    </button>
                    <button className="bg-white text-lg rounded-full p-1">
                      <TiSocialFacebook />
                    </button>
                  </div>

                  <div className="mt-5 px-3 text-xs">
                    <p className="line-clamp-3">{item?.address}</p>
                    <div className="my-4">
                      <p>Mobile</p>
                      <Link className="cursor-pointer text-blue-800 break-words">
                        {item?.phone}
                      </Link>
                    </div>
                    <p>Email</p>
                    <Link className="cursor-pointer text-blue-800">
                      {item?.email}
                    </Link>
                    <p className="mt-4">Website</p>
                    <Link className="text-blue-800 cursor-pointer break-words line-clamp-1">
                      {item?.website}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsDesign;
