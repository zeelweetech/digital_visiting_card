import React, { useEffect, useState } from "react";
import phone from "../../../assets/image/phone.png";
import businesswomen from "../../../assets/image/businesswomen.webp";
import { FaInstagram, FaLink, FaRegAddressCard } from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { PiFacebookLogoBold, PiLinkedinLogo } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { getProfileDetails } from "../../../services/ProfileServices";
import Loader from "../../Loader";
import { TfiWorld } from "react-icons/tfi";
import { SlPaypal } from "react-icons/sl";
import toast from "react-hot-toast";

function PersonalLinksCard({ values }) {
  const { id } = useParams();
  const [cardData, setCardData] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Businesslink = values?.businessCardLink || cardData?.businessCardLink;
  const Link = Businesslink ? decodeURIComponent(Businesslink).split("/") : []; 

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
    <div className="flex flex-col md:justify-center items-center h-screen md:h-screen overflow-hidden">
      {loading ? (
        <Loader />
      ) : (
        <div className="relative w-full max-w-lg px-1.5 md:ml-44">
          <div className="absolute left-0 hidden md:block">
            <img src={phone} className="w-80 h-30" alt="Not Found" />
          </div>
          <div className="relative px-4 pt-16 mt-12 h-[36rem] scrollable-container overflow-y-auto overflow-x-hidden">
            <div
              className="w-full md:w-17 rounded-3xl text-center mb-4 py-8"
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
                className="rounded-full border-4 border-white w-32 h-32 -mt-24 mx-auto"
                style={{
                  boxShadow: "0 1px 2px 0 #ffffff, 0 1px 5px 0 #ffffff",
                }}
                alt="Not Found"
              />
              <div
                className="text-center"
                style={{
                  color: values?.fontcolor
                    ? values?.fontcolor
                    : cardData?.fontcolor
                    ? cardData?.fontcolor
                    : "rgb(255 255 255)",
                }}
              >
                <p className="text-2xl font-semibold mb-2">
                  {values?.name
                    ? values?.name
                    : cardData?.name
                    ? cardData?.name
                    : "Johannes GutMann"}
                </p>
                <div className="flex justify-center">
                  <p className="text-base w-52 break-words">
                    {values?.title
                      ? values?.title
                      : cardData?.title
                      ? cardData?.title
                      : "Manager"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-around bg-white shadow-xl my-4 py-4 md:w-17">
              <div className="flex flex-col items-center mb-4">
                <button
                  type="button"
                  onClick={() =>
                    handleAddress(values?.address || cardData?.address)
                  }
                >
                  <FaRegAddressCard className="text-2xl" />
                </button>
                <p className="text-xs text-center mt-2">Address</p>
              </div>
              <div className="flex flex-col items-center mb-4">
                <button
                  type="button"
                  onClick={() => handlePhone(values?.phone || cardData?.phone)}
                >
                  <IoCallOutline className="text-2xl" />
                </button>
                <p className="text-xs text-center mt-2">Calling</p>
              </div>
              <div className="flex flex-col items-center mb-4">
                <button
                  type="button"
                  onClick={() => handleMail(values?.email || cardData?.email)}
                >
                  <IoMailOutline className="text-2xl" />
                </button>
                <p className="text-xs text-center mt-2">Email</p>
              </div>
            </div>

            <div className="bg-white shadow-xl py-4 md:w-17">
              <p className="text-lg font-semibold px-4 pb-2">Links</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center mb-4">
                  <button
                    type="button"
                    onClick={() =>
                      handleRedirect(values?.instagram || cardData?.instagram)
                    }
                  >
                    <FaInstagram className="text-2xl" />
                  </button>
                  <p className="text-xs text-center mt-2">Instagram</p>
                </div>
                <div className="flex flex-col items-center mb-4">
                  <button
                    type="button"
                    onClick={() =>
                      handleRedirect(values?.facebook || cardData?.facebook)
                    }
                  >
                    <PiFacebookLogoBold className="text-2xl" />
                  </button>
                  <p className="text-xs text-center mt-2">Facebook</p>
                </div>
                <div className="flex flex-col items-center mb-4">
                  <button
                    type="button"
                    onClick={() =>
                      handleRedirect(values?.linkedin || cardData?.linkedin)
                    }
                  >
                    <PiLinkedinLogo className="text-2xl" />
                  </button>
                  <p className="text-xs text-center mt-2">Linkedin</p>
                </div>
                <div className="flex flex-col items-center mb-4">
                  <button
                    type="button"
                    onClick={() =>
                      handleRedirect(values?.website || cardData?.website)
                    }
                  >
                    <TfiWorld className="text-2xl" />
                  </button>
                  <p className="text-xs text-center mt-2">Website</p>
                </div>
                <div className="flex flex-col items-center mb-4">
                  <button
                    type="button"
                    onClick={() =>
                      handleRedirect(values?.paypal || cardData?.paypal)
                    }
                  >
                    <SlPaypal className="text-2xl" />
                  </button>
                  <p className="text-xs text-center mt-2">PayPal</p>
                </div>
                <div className="flex flex-col items-center mb-4">
                  <button
                    type="button"
                    onClick={() =>
                      handleRedirect(
                        values?.businessCardLink || cardData?.businessCardLink
                      )
                    }
                  >
                    <FaLink className="text-2xl" />
                  </button>
                  <p className="text-xs text-center mt-2 w-24 line-clamp-1">{Link?.[4] ? Link[4] : "No Link available"}</p>
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
