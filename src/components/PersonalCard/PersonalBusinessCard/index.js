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
import Loader from "../../Loader";
import toast from "react-hot-toast";

function PersonalBusinessCard({ values }) {
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
    } else {
      {
        toast("Not Available");
      }
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
      className={`flex flex-col justify-center items-center h-0 md:h-screen mt-22 md:mt-0`}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center w-full max-w-md relative">
          <div
            className={`md:rounded-3xl w-full md:w-80 bg-white md:shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            <div
              className="h-80 md:h-72 md:rounded-se-3xl md:rounded-tl-3xl"
              style={{
                backgroundColor: values?.backgroundcolor
                  ? values?.backgroundcolor
                  : cardData?.backgroundcolor
                  ? cardData?.backgroundcolor
                  : "rgb(23 37 84)",
              }}
            >
              <div className="flex flex-col justify-center items-center text-center pt-10">
                {/* <div> */}
                <div className="flex justify-center">
                  <img
                    src={
                      values?.image
                        ? URL.createObjectURL(values?.image)
                        : cardData?.image
                        ? cardData?.image
                        : businessmen
                    }
                    className="w-28 md:w-24 h-28 md:h-24 rounded-full"
                    alt="Not Found"
                  />
                </div>
                <div className="h-24 scrollable-container overflow-y-auto overflow-x-hidden">
                  <div className="flex justify-center">
                    <p
                      className="text-2xl pt-2 w-56"
                      style={{
                        color: values?.fontcolor
                          ? values?.fontcolor
                          : cardData?.fontcolor
                          ? cardData?.fontcolor
                          : "rgb(234 179 8)",
                      }}
                    >
                      {values?.name
                        ? values?.name
                        : cardData?.name
                        ? cardData?.name
                        : "Aaron Hotchner"}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <p
                      className="w-72"
                      style={{
                        color: values?.fontcolor
                          ? values?.fontcolor
                          : cardData?.fontcolor
                          ? cardData?.fontcolor
                          : "rgb(234 179 8)",
                      }}
                    >
                      {values?.title
                        ? values?.title
                        : cardData?.title
                        ? cardData?.title
                        : "Manager, Logstics Mackwater pvt Ltd."}
                    </p>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>

            <div className="flex justify-evenly -mt-7 md:-mt-5 text-3xl md:text-2xl">
              <button
                className="bg-white rounded-full p-3 md:p-2"
                onClick={() => handlePhone(values?.phone || cardData?.phone)}
              >
                <FiPhone />
              </button>
              <button
                className="bg-white rounded-full p-3 md:p-2"
                onClick={() => handleMail(values?.email || cardData?.email)}
              >
                <CiMail />
              </button>
              <button
                className="bg-white rounded-full p-3 md:p-2"
                onClick={() =>
                  handleAddress(values?.address || cardData?.address)
                }
              >
                <HiOutlineMapPin />
              </button>
            </div>

            <div className="mt-10 md:mt-5 px-5 md:px-3">
              <div className="my-5">
                <p>Mobile</p>
                <Link
                  className="cursor-pointer text-blue-800 break-words"
                  onClick={() => handlePhone(values?.phone || cardData?.phone)}
                >
                  {values?.phone || cardData?.phone
                    ? values?.phone || cardData?.phone
                    : "+1 87957 89786"}
                </Link>
              </div>

              <div className="mt-8 mb-6">
                <p>Email</p>
                <Link
                  className="cursor-pointer text-blue-800"
                  onClick={() => handleMail(values?.email || cardData?.email)}
                >
                  {values?.email || cardData?.email
                    ? values?.email || cardData?.email
                    : "digitalcard@gmail.com"}
                </Link>
              </div>

              {(values?.website || cardData?.website) && (
                <div>
                  <p className="mt-8 md:mt-4">Website</p>
                  <Link
                    className="text-blue-800 font-semibold cursor-pointer break-words w-52"
                    onClick={() =>
                      handleRedirect(values?.website || cardData?.website)
                    }
                  >
                    {(values?.website || cardData?.website) &&
                      (values?.website || cardData?.website)}
                  </Link>
                </div>
              )}
            </div>

            <p className="text-center mt-8 md:mt-4 font-semibold text-2xl md:text-lg">
              Connect with me on
            </p>

            <div className="flex items-center justify-evenly px-6 mt-3 md:mt-1">
              <img
                src={facebook}
                className="w-16 md:w-10 h-16 md:h-10"
                alt="Not Foung"
                onClick={() => {
                  handleRedirect(values?.facebook || cardData?.facebook);
                }}
              />
              <img
                src={instagram}
                className="w-16 md:w-10 h-16 md:h-10"
                alt="Not Foung"
                onClick={() =>
                  handleRedirect(values?.instagram || cardData?.instagram)
                }
              />
              <img
                src={linkedin}
                className="w-16 md:w-10 h-16 md:h-10"
                alt="Not Foung"
                onClick={() =>
                  handleRedirect(values?.linkedin || cardData?.linkedin)
                }
              />
              <img
                src={paypal}
                className="w-16 md:w-12 h-16 md:h-12"
                alt="Not Foung"
                onClick={() =>
                  handleRedirect(values?.paypal || cardData?.paypal)
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalBusinessCard;
