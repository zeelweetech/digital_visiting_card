import React, { useEffect, useState } from "react";
import avatar from "../../assets/image/avatar.png";
import { HiOutlineMapPin } from "react-icons/hi2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProfileDetails } from "../../services/ProfileServices";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import Loader from "../Loader";
import toast from "react-hot-toast";

function BusinessCardPreview({ selectTheme, values }) {
  const { name } = useParams();
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
        const res = await getProfileDetails({ userName: name });
        console.log("res", res);
        setCardData(res?.cardDetail);
        setLoading(false);
      } catch (err) {
        console.log("err", err);
        setLoading(false);
      }
    };
    if (name) {
      fetchProfileDetails();
    }
  }, [name]);

  const handleRedirect = (url) => {
    if (!url || url === "undefined") {
      toast("Not Available");
    } else if (url) {
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
    <div className="flex flex-col justify-center items-center h-0 md:h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center w-full max-w-md relative ">
          <div className="md:rounded-3xl w-full md:w-80 h-full scrollable-container overflow-y-auto overflow-x-hidden md:h-30 bg-white shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`${themeClass} h-72 md:h-64 md:rounded-t-3xl`}>
              <div className="flex justify-center items-center text-center pt-10">
                <div>
                  <div className="flex justify-center">
                    <img
                      src={
                        values?.image
                          ? URL.createObjectURL(values?.image)
                          : cardData?.image
                          ? cardData?.image
                          : avatar
                      }
                      className="w-32 md:w-24 h-32 md:h-24 mt-2 md:mt-0"
                      alt="Not Found"
                    />
                  </div>
                  <p className="text-2xl text-white pt-2">
                    {values?.name
                      ? values?.name
                      : cardData?.name
                      ? cardData?.name
                      : "Business Name"}
                  </p>
                  <p className="text-white font-semibold">
                    {" "}
                    {values?.title
                      ? values?.title
                      : cardData?.title
                      ? cardData?.title
                      : "Business Title"}
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
              {(values?.instagram || cardData?.instagram) &&
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
              {(values?.facebook || cardData?.facebook) &&
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

            <div className="mt-9 md:mt-5 px-4 md:px-3">
              <p className="break-words">
                Description :{" "}
                {values?.description ? (
                  <span
                    dangerouslySetInnerHTML={{ __html: values.description }}
                  />
                ) : cardData?.description ? (
                  <span
                    dangerouslySetInnerHTML={{ __html: cardData.description }}
                  />
                ) : (
                  "Luxury Auto Dealership Over 9 years of experience in auto sales, dedicated to bridging the gap between sales and customers."
                )}
              </p>
              {(values?.phone || cardData?.phone) && (
                <div className="my-7 md:my-4">
                  <p>Mobile</p>
                  <Link
                    className="cursor-pointer text-blue-800 break-words"
                    onClick={() =>
                      handlePhone(values?.phone || cardData?.phone)
                    }
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
              {(values?.website || cardData?.website) &&
                cardData?.website !== "undefined" && (
                  <>
                    <p className="mt-6 md:mt-4">Website</p>
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
      )}
    </div>
  );
}

export default BusinessCardPreview;
