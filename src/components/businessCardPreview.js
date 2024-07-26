import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import avatar from "../assets/image/avatar.png";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { HiOutlineMapPin } from "react-icons/hi2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProfileDetails } from "../services/ProfileServices";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";

function BusinessCardPreview({ selectTheme, values }) {
  const { id } = useParams();
  const [cardData, setCardData] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const themeClasses = {
    Light: "bg-theme",
    Dark: "bg-black text-white",
    Neutral: "bg-theme1 text-white",
    Gradient: "bg-theme2 text-white",
    Energetic: "bg-custom-gradient text-black",
    Ambitious: "bg-custom1-gradient",
  };
  console.log("values", values);
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

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="flex flex-col items-center w-full max-w-md relative">
        <div
          className="rounded-3xl w-80 h-30 bg-white shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            minHeight: cardData?.image ? "100vh" : "w-80 h-30",
          }}
        >
          <div
            className={`${themeClass} h-64 rounded-se-3xl rounded-tl-3xl p-3`}
          >
            <div className="flex justify-center items-center text-center pt-5">
              <div>
                <img
                  src={
                    values?.image
                      ? URL.createObjectURL(values?.image)
                      : cardData?.image
                      ? cardData?.image
                      : avatar
                  }
                  className="w-24 h-24"
                  alt="Not Found"
                />
                <p className="text-2xl text-white pt-2">
                  {values?.name
                    ? values?.name
                    : cardData?.name
                    ? cardData?.name
                    : "Name"}
                </p>
                <p className="text-white">
                  {" "}
                  {values?.title
                    ? values?.title
                    : cardData?.title
                    ? cardData?.title
                    : "Title"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly -mt-5">
            {(values?.address || cardData?.address) && (
              <button
                className="bg-white text-2xl rounded-full py-2 px-2"
                onClick={() =>
                  handleAddress(values?.address || cardData?.address)
                }
              >
                <HiOutlineMapPin />
              </button>
            )}
            {(values?.instagram || cardData) &&
              cardData?.instagram !== "undefined" && (
                <button
                  className="bg-white text-2xl rounded-full py-2 px-2"
                  onClick={() =>
                    handleRedirect(values?.instagram || cardData?.instagram)
                  }
                >
                  <IoLogoInstagram />
                </button>
              )}
            {(values?.facebook || cardData) &&
              cardData?.facebook !== "undefined" && (
                <button
                  className="bg-white text-2xl rounded-full py-2 px-2"
                  onClick={() =>
                    handleRedirect(values?.facebook || cardData?.facebook)
                  }
                >
                  <TiSocialFacebook />
                </button>
              )}
          </div>

          <div className="mt-5 px-3">
            <p className="break-words">
              Description :{" "}
              {values?.description
                ? values?.description
                : cardData?.description
                ? cardData?.description
                : "Luxury Auto Dealership Over 9 years of experience in auto sales,dedicated to bridging the gap between sales and customers."}
            </p>
            {(values?.phone || cardData?.phone) && (
              <div className="my-4">
                <p>Mobile</p>
                <Link
                  className="cursor-pointer text-blue-800"
                  onClick={() => handlePhone(values?.phone || cardData?.phone)}
                >
                  {values?.phone || cardData?.phone}
                </Link>
              </div>
            )}
            {(values?.email || cardData?.email) && (
              <>
                <p>Email</p>
                <Link
                  className="cursor-pointer text-blue-800"
                  onClick={() => handleMail(values?.email || cardData?.email)}
                >
                  {values?.email || cardData?.email}
                </Link>
              </>
            )}
            {(values?.website || cardData) &&
              cardData?.website !== "undefined" && (
                <>
                  <p className="mt-4">Website</p>
                  <Link
                    className="text-blue-800 cursor-pointer"
                    onClick={() =>
                      handleRedirect(values?.website || cardData?.website)
                    }
                  >
                    {values?.website || cardData?.website}
                  </Link>
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCardPreview;
