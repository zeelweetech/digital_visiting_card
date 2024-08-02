import React, { useEffect, useState } from "react";
import phone from "../../../assets/image/phone.png";
import businesswomen from "../../../assets/image/businesswomen.webp";
import {
  FaInstagram,
  FaRegAddressCard,
} from "react-icons/fa";
import {
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import {
  PiFacebookLogoBold,
  PiLinkedinLogo,
} from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { getProfileDetails } from "../../../services/ProfileServices";
import Loader from "../../Loader";
import { TfiWorld } from "react-icons/tfi";
import { SlPaypal } from "react-icons/sl";

function PersonalLinksCard({ values }) {
  const { id } = useParams();
  const [cardData, setCardData] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    <div
      className="flex flex-col justify-center items-center h-100 md:h-screen -mt-5 md:mt-0 overflow-hidden"
    >
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="absolute">
            <img
              src={phone}
              className="hidden md:block rounded-2 w-80 h-30"
              alt="Not Found"
            />
          </div>
          <div className="relative px-p5 pt-7">
            <div
              className="w-21 md:w-17 rounded-3xl text-center md:mt-24 mb-2 py-8"
              style={{
                backgroundColor: values?.backgroundcolor
                  ? values?.backgroundcolor
                  : cardData?.backgroundcolor
                  ? cardData?.backgroundcolor
                  : "rgb(139 92 246)",
              }}
            >
              <img
                src={
                  values?.image
                    ? URL.createObjectURL(values?.image)
                    : cardData?.image
                    ? cardData?.image
                    : businesswomen
                }
                className="rounded-full border-4 border-white w-36 h-36 absolute left-1/2 -mt-10 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  boxShadow: "0 1px 2px 0 #ffffff, 0 1px 5px 0 #ffffff",
                }}
                alt="Not Found"
              />
              {/* <div className="relative">
                <button
                  type="button"
                  className="bg-white rounded-full p-1 ml-24 -mt-40"
                >
                  <IoShareSocialOutline />
                </button>
              </div> */}
              <div
                className="overflow-y-auto overflow-x-hidden overscroll-y-hidden mt-2"
                style={{
                  color: values?.fontcolor
                    ? values?.fontcolor
                    : cardData?.fontcolor
                    ? cardData?.fontcolor
                    : "rgb(255 255 255)",
                }}
              >
                <div className="flex justify-center">
                  <p className="text-3xl font-semibold pt-9 w-32">
                    {values?.name
                      ? values?.name
                      : cardData?.name
                      ? cardData?.name
                      : "Johannes GutMann"}
                  </p>
                </div>
                <p className="text-base pt-2">
                  {values?.title
                    ? values?.title
                    : cardData?.title
                    ? cardData?.title
                    : "Manager"}
                </p>
              </div>
            </div>

            <div className="flex justify-around bg-white shadow-xl mx-1 my-7 md:my-3 py-5 md:py-3">
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() =>
                    handleAddress(values?.address || cardData?.address)
                  }
                >
                  <FaRegAddressCard className="text-3xl" />
                </button>
                <p className="text-xs w-16 text-center">Address</p>
              </div>
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => handlePhone(values?.phone || cardData?.phone)}
                >
                  <IoCallOutline className="text-3xl" />
                </button>
                <p className="text-xs">calling</p>
              </div>
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => handleMail(values?.email || cardData?.email)}
                >
                  <IoMailOutline className="text-3xl" />
                </button>
                <p className="text-xs">Email</p>
              </div>
            </div>

            <div className="bg-white shadow-xl mx-1 py-6 md:py-3">
              <p className="text-lg font-semibold px-5 md:px-3 pb-4 md:pb-2">Links</p>
              <div className="grid grid-cols-3 gap-y-5">
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() =>
                      handleRedirect(values?.instagram || cardData?.instagram)
                    }
                  >
                    <FaInstagram className="text-3xl" />
                  </button>
                  <p className="text-xs w-16 text-center">Instagram</p>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => {
                      handleRedirect(values?.facebook || cardData?.facebook);
                    }}
                  >
                    <PiFacebookLogoBold className="text-3xl" />
                  </button>
                  <p className="text-xs">Facebook</p>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() =>
                      handleRedirect(values?.linkedin || cardData?.linkedin)
                    }
                  >
                    <PiLinkedinLogo className="text-3xl" />
                  </button>
                  <p className="text-xs">Linkedin</p>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() =>
                      handleRedirect(values?.website || cardData?.website)
                    }
                  >
                    <TfiWorld className="text-3xl" />
                  </button>
                  <p className="text-xs">Website</p>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() =>
                      handleRedirect(values?.paypal || cardData?.paypal)
                    }
                  >
                    <SlPaypal className="text-3xl" />
                  </button>
                  <p className="text-xs">PayPal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalLinksCard;
