import React, { useEffect, useState } from "react";
import businessmen from "../../../assets/image/businessmen.jpg";
import facebook from "../../../assets/image/Facebook.webp";
import instagram from "../../../assets/image/instagram.jpeg";
import linkedin from "../../../assets/image/linkedin.png";
import paypal from "../../../assets/image/paypal.webp";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProfileDetails } from "../../../services/ProfileServices";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

function PersonalBusinessCard({ selectTheme, values }) {
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
    <div className={`flex flex-col justify-center items-center min-h-screen`}>
      <div className="flex flex-col items-center w-full max-w-md relative">
        <div
          className={`${
            cardData?.image ? "rounded-none" : "rounded-3xl"
          } w-full md:w-80 h-30 bg-white shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            cardData?.image ? "min-h-screen" : "auto"
          }`}
        >
          <div
            className={`bg-blue-950 h-72 ${
              cardData?.image ? "rounded-none" : "rounded-se-3xl"
            } ${cardData?.image ? "rounded-none" : "rounded-tl-3xl"}`}
          >
            <div className="flex justify-center items-center text-center pt-10">
              <div>
                <div className="flex justify-center">
                  <img
                    src={
                      values?.image
                        ? URL.createObjectURL(values?.image)
                        : cardData?.image
                        ? cardData?.image
                        : businessmen
                    }
                    className="w-24 h-24 rounded-full"
                    alt="Not Found"
                  />
                </div>
                <p className="text-2xl text-yellow-500 pt-2">
                  {values?.name
                    ? values?.name
                    : cardData?.name
                    ? cardData?.name
                    : "Aaron Hotchner"}
                </p>
                <p className="text-yellow-500 w-40">
                  {" "}
                  {values?.title
                    ? values?.title
                    : cardData?.title
                    ? cardData?.title
                    : "Manager, Logstics Mackwater pvt Ltd."}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly -mt-5">
            {/* {(values?.address || cardData?.address) && ( */}
            <button
              className="bg-white text-2xl rounded-full py-2 px-2"
              onClick={() =>
                handleAddress(values?.address || cardData?.address)
              }
            >
              <FiPhone />
            </button>
            {/* )} */}
            {/* {(values?.instagram || cardData) &&
              cardData?.instagram !== "undefined" && ( */}
            <button
              className="bg-white text-2xl rounded-full py-2 px-2"
              onClick={() =>
                handleRedirect(values?.instagram || cardData?.instagram)
              }
            >
              <CiMail />
            </button>
            {/* )} */}
            {/* {(values?.facebook || cardData) &&
              cardData?.facebook !== "undefined" && ( */}
            <button
              className="bg-white text-2xl rounded-full py-2 px-2"
              onClick={() =>
                handleRedirect(values?.facebook || cardData?.facebook)
              }
            >
              <HiOutlineMapPin />
            </button>
            {/* )} */}
          </div>

          <div className="mt-5 px-3">
            {/* {(values?.phone || cardData?.phone) && ( */}
            <div className="my-5">
              <p>Mobile</p>
              <p>+1 87957 89786</p>
              <Link
                className="cursor-pointer text-blue-800 break-words"
                onClick={() => handlePhone(values?.phone || cardData?.phone)}
              >
                {values?.phone || cardData?.phone}
              </Link>
            </div>
            {/* )} */}
            {/* {(values?.email || cardData?.email) && ( */}
            <div className="mt-8 mb-6">
              <p>Email</p>
              <p>digitalcard@gmail.com</p>
              <Link
                className="cursor-pointer text-blue-800"
                onClick={() => handleMail(values?.email || cardData?.email)}
              >
                {values?.email || cardData?.email}
              </Link>
            </div>
            {/* )} */}
            {/* {(values?.website || cardData) &&
              cardData?.website !== "undefined" && ( */}
            <>
              <p className="mt-4">Website</p>
              <p className="text-blue-800 font-semibold cursor-pointer">
                https://blackwater.com
              </p>
              <Link
                className="text-blue-800 font-semibold cursor-pointer"
                onClick={() =>
                  handleRedirect(values?.website || cardData?.website)
                }
              >
                {values?.website || cardData?.website}
              </Link>
            </>
            {/* )} */}
          </div>
          <p className="text-center mt-5 font-semibold text-lg">
            Connect with me on
          </p>

          <div className="flex items-center justify-evenly px-6 mt-3">
            <img src={facebook} className="w-10 h-10" alt="Not Foung" />
            <img src={instagram} className="w-10 h-10" alt="Not Foung" />
            <img src={linkedin} className="w-10 h-10" alt="Not Foung" />
            <img src={paypal} className="w-12 h-12" alt="Not Foung" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalBusinessCard;
