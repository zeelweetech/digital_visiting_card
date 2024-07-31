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

function PersonalPreviewCard({ selectTheme, values }) {
  const { id } = useParams();
  const [cardData, setCardData] = useState();
  const [loading, setLoading] = useState(false);
  const path = window.location.pathname.split("/").pop();

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

  // console.log("valus ********** :", values);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden">
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`flex flex-col items-center ${
            cardData?.image ? "w-full" : "w-full"
          } max-w-md relative ${cardData?.image && themeClass}`}
          style={{
            minHeight: cardData?.image ? "100vh" : "auto",
          }}
        >
          {!cardData?.image && (
            <img
              src={phone}
              className={`rounded-2 w-80 h-30 ${themeClass} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
              alt="Not Found"
            />
          )}
          <div
            className="scrollable-container h-h30 overflow-x-hidden relative"
            style={{ minHeight: cardData?.image ? "100vh" : "34rem",}}
          >
            <div className="bg-gray-200 w-17 h-80 rounded-3xl flex flex-col justify-center text-center mt-20">
              <img
                src={
                  values?.image
                    ? URL.createObjectURL(values?.image)
                    : cardData?.image
                    ? cardData?.image
                    : avatar
                }
                className="rounded-full border-4 border-white w-36 h-36 -mt-44 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                alt="Not Found"
              />
              <div className="overflow-y-auto overflow-x-hidden overscroll-y-hidden">
                <p className="text-3xl pt-12 mt-5">
                  {values?.name
                    ? values?.name
                    : cardData?.name
                    ? cardData?.name
                    : "Noah Miller"}
                </p>
                <p className="text-xl pt-2">
                  {values?.title
                    ? values?.title
                    : cardData?.title
                    ? cardData?.title
                    : "Title"}
                </p>
                <p className="text-xl pt-2">
                  {values?.company
                    ? values?.company
                    : cardData?.company
                    ? cardData?.company
                    : "Company Name"}
                </p>
                <p className="pt-3 pr-7 pl-4 w-72 break-words">
                  {values?.description ? (
                    <span
                      dangerouslySetInnerHTML={{ __html: values.description }}
                    />
                  ) : cardData?.description ? (
                    <span
                      dangerouslySetInnerHTML={{ __html: cardData.description }}
                    />
                  ) : (
                    `Luxury Auto Dealership Over 9 years of experience in auto sales,
              dedicated to bridging the gap between sales and customers. +1
              [345] 678 - 888`
                  )}
                </p>
              </div>
            </div>

            {(values?.email || cardData?.email) && (
              <button
                className="bg-neutral-700 text-white font-semibold mt-4 py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto"
                onClick={() => handleMail(values?.email || cardData?.email)}
              >
                <CiMail className="ml-5 mr-20" />
                <span>Email</span>
              </button>
            )}
            {(values?.phone || cardData?.phone) && (
              <button
                className="bg-neutral-700 text-white font-semibold my-3 py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto"
                onClick={() => handlePhone(values?.phone || cardData?.phone)}
              >
                <MdLocalPhone className="ml-5 mr-20" />
                <span>phone</span>
              </button>
            )}
            {(values?.address || cardData?.address) && (
              <button
                className="bg-neutral-700 text-white font-semibold py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto"
                onClick={() =>
                  handleAddress(values?.address || cardData?.address)
                }
              >
                <FiMapPin className="ml-5 mr-20" />
                <span>Address</span>
              </button>
            )}
            {(values?.instagram || cardData) &&
              cardData?.instagram !== "undefined" && (
                <button
                  className="bg-neutral-700 text-white font-semibold my-3 py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto"
                  onClick={() =>
                    handleRedirect(values?.instagram || cardData?.instagram)
                  }
                >
                  <IoLogoInstagram className="ml-5 mr-20" />
                  <span>Instagram</span>
                </button>
              )}
            {(values?.website || cardData) &&
              cardData?.website !== "undefined" && (
                <button
                  className="bg-neutral-700 text-white font-semibold my-3 py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto"
                  onClick={() =>
                    handleRedirect(values?.website || cardData?.website)
                  }
                >
                  <BiWorld className="ml-5 mr-20" />
                  <span>Website</span>
                </button>
              )}
            {(values?.facebook || cardData) &&
              cardData?.facebook !== "undefined" && (
                <button
                  className="bg-neutral-700 text-white font-semibold my-3 py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto"
                  onClick={() =>
                    handleRedirect(values?.facebook || cardData?.facebook)
                  }
                >
                  <TiSocialFacebook className="ml-5 mr-20" />
                  <span>Facebook</span>
                </button>
              )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalPreviewCard;