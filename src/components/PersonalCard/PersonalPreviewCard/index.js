import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfileDetails } from "../../../services/ProfileServices";
import { TiSocialFacebook } from "react-icons/ti";
import { BiWorld } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import Loader from "../../Loader";
import avatar from "../../../assets/image/avatar.png";
import phone from "../../../assets/image/phone.png";
import toast from "react-hot-toast";
import { FaLink } from "react-icons/fa";

function PersonalPreviewCard({ selectTheme, values }) {
  const { id } = useParams();
  const [cardData, setCardData] = useState();
  const [loading, setLoading] = useState(false);
  const path = window.location.pathname.split("/").pop();

  const Businesslink = values?.businessCardLink || cardData?.businessCardLink;
  const Link = Businesslink ? decodeURIComponent(Businesslink).split("/") : []; 

  const themeClasses = {
    Light: "bg-theme",
    Dark: "bg-black",
    Neutral: "bg-theme1",
    Gradient: "bg-theme2",
    Energetic: "bg-custom-gradient",
    Ambitious: "bg-custom1-gradient",
  };

  const themeClass = selectTheme
    ? themeClasses[selectTheme]
    : themeClasses[cardData?.color] || "bg-theme";

  useEffect(() => {
    const fetchProfileDetails = async () => {
      setLoading(true);
      try {
        const res = await getProfileDetails({ id: id });
        console.log("res", res);
        setCardData(res?.cardDetail);
        setLoading(false);
      } catch (err) {
        console.log("err", err);
        setLoading(false);
      }
    };
    if (id) {
      fetchProfileDetails();
    }
  }, [id]);

  const handleRedirect = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      toast("Not Available");
    }
  };

  const handleMail = (email) => {
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  const handlePhone = (phone) => {
    if (phone) {
      window.location.href = `tel:${phone}`;
    }
  };

  const handleAddress = (address) => {
    if (address) {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          address
        )}`,
        "_blank"
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-full md:h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`md:rounded-2 ${themeClass} w-full md:w-80 pt-14 px-4 md:p-0`}
        >
          <div className="absolute">
            <img
              src={phone}
              className={`hidden md:block rounded-2 w-full h-30 ${themeClass}`}
              alt="Not Found"
            />
          </div>
          <div className="scrollable-container h-full md:h-35 overflow-x-hidden relative md:mt-10 md:pl-p5">
            <img
              src={
                values?.image
                  ? URL.createObjectURL(values?.image)
                  : cardData?.image
                  ? cardData?.image
                  : avatar
              }
              className="rounded-full border-4 border-white w-36 h-36 mt-20 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              alt="Not Found"
            />
            <div className="bg-gray-200 w-full md:w-17 h-auto rounded-3xl flex flex-col justify-center text-center mt-20">
              <div>
                <p className="text-3xl pt-12 mt-5">
                  {values?.name
                    ? values?.name
                    : cardData?.name
                    ? cardData?.name
                    : "Noah Miller"}
                </p>
                <p className="text-xl pt-2 font-semibold">
                  {values?.title
                    ? values?.title
                    : cardData?.title
                    ? cardData?.title
                    : "Directore"}
                </p>
                <p className="text-xl pt-2 font-semibold">
                  {values?.company
                    ? values?.company
                    : cardData?.company
                    ? cardData?.company
                    : "Company Name"}
                </p>
                <div className="flex justify-center">
                  <p className="pt-3 px-3 w-72 break-words">
                    {values?.description ? (
                      <span
                        dangerouslySetInnerHTML={{ __html: values.description }}
                      />
                    ) : cardData?.description ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: cardData.description,
                        }}
                      />
                    ) : (
                      `Luxury Auto Dealership Over 9 years of experience in auto sales,
                    dedicated to bridging the gap between sales and customers. +1
                    [345] 678 - 888`
                    )}
                  </p>
                </div>
              </div>
            </div>
            {(values?.businessCardLink || cardData?.businessCardLink) && (
              <button
                className="bg-neutral-700 text-white font-semibold mt-4 py-2.5 w-full md:w-17 rounded-full shadow-md flex items-center"
                onClick={() =>
                  handleRedirect(
                    values?.businessCardLink || cardData?.businessCardLink
                  )
                }
              >
                <FaLink
                  className="ml-4"
                />
                <span className="flex-1 text-center w-28 line-clamp-1">{Link?.[4] ? Link[4] : "No link available"}</span>
              </button>
            )}
            {(values?.email || cardData?.email) && (
              <button
                className="bg-neutral-700 text-white font-semibold mt-4 py-2.5 w-full md:w-17 rounded-full shadow-md flex items-center"
                onClick={() => handleMail(values?.email || cardData?.email)}
              >
                <CiMail className="ml-4" />
                <span className="flex-1 text-center">Email</span>
              </button>
            )}
            {(values?.phone || cardData?.phone) && (
              <button
                className="bg-neutral-700 text-white font-semibold my-3 py-2.5 w-full md:w-17 rounded-full shadow-md flex items-center"
                onClick={() => handlePhone(values?.phone || cardData?.phone)}
              >
                <MdLocalPhone className="ml-4" />
                <span className="flex-1 text-center">phone</span>
              </button>
            )}
            {(values?.address || cardData?.address) && (
              <button
                className="bg-neutral-700 text-white font-semibold py-2.5 w-full md:w-17 rounded-full shadow-md flex items-centero"
                onClick={() =>
                  handleAddress(values?.address || cardData?.address)
                }
              >
                <FiMapPin className="ml-4" />
                <span className="flex-1 text-center">Address</span>
              </button>
            )}
            {(values?.instagram || cardData?.instagram) &&
              cardData?.instagram !== "undefined" && (
                <button
                  className="bg-neutral-700 text-white font-semibold my-3 py-2.5 w-full md:w-17 rounded-full shadow-md flex items-center overflow-auto"
                  onClick={() =>
                    handleRedirect(values?.instagram || cardData?.instagram)
                  }
                >
                  <IoLogoInstagram className="ml-4" />
                  <span className="flex-1 text-center">Instagram</span>
                </button>
              )}
            {(values?.website || cardData?.website) &&
              cardData?.website !== "undefined" && (
                <button
                  className="bg-neutral-700 text-white font-semibold my-3 py-2.5 w-full md:w-17 rounded-full shadow-md flex items-center overflow-auto"
                  onClick={() =>
                    handleRedirect(values?.website || cardData?.website)
                  }
                >
                  <BiWorld className="ml-4" />
                  <span className="flex-1 text-center">Website</span>
                </button>
              )}
            {(values?.facebook || cardData?.facebook) &&
              cardData?.facebook !== "undefined" && (
                <button
                  className="bg-neutral-700 text-white font-semibold my-3 py-2.5 w-full md:w-17 rounded-full shadow-md flex items-center overflow-auto"
                  onClick={() =>
                    handleRedirect(values?.facebook || cardData?.facebook)
                  }
                >
                  <TiSocialFacebook className="ml-4" />
                  <span className="flex-1 text-center">Facebook</span>
                </button>
              )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalPreviewCard;
