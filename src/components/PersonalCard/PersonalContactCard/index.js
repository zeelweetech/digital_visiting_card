import React, { useEffect, useRef, useState } from "react";
import phone from "../../../assets/image/phone.png";
import instagram from "../../../assets/image/instagram.jpeg";
import twitter from "../../../assets/image/twitter.png";
import linkedin from "../../../assets/image/linkedin.png";
import businesswomen from "../../../assets/image/businesswomen.webp";
import location from "../../../assets/image/location.png";
import facebook from "../../../assets/image/Facebook.webp";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { getProfileDetails } from "../../../services/ProfileServices";
import Loader from "../../Loader";

function PersonalContactCard({ values }) {
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

  const handleDownloadVCard = () => {
    const name = values?.name || cardData?.name || "Alex Thomson";
    const company = values?.company || cardData?.company || "Company name";
    const title = values?.title || cardData?.title || "Director";
    const email = values?.email || cardData?.email || "hello@gmail.com";
    const phone = values?.phone || cardData?.phone || "+31 61166 87576";
    const website = values?.website || cardData?.website || "www.acmenet.com";
    const address =
      values?.address ||
      cardData?.address ||
      "Acme LTD 1131 AW Amstertlam, The Netherlands";

    const vCardData = `BEGIN
VERSION:3.0
FN:${name}
ORG:${company}
TITLE:${title}
EMAIL;TYPE=WORK:${email}
TEL;TYPE=WORK:${phone}
URL:${website}
ADR;TYPE=WORK:${address}
END
`;
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.replace(/\s/g, "_")}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col justify-center items-center h-0 md:h-screen overflow-y-hidden">
      <div className="relative">
        <img src={phone} className="hidden md:block w-80" alt="Phone" />
      </div>
      <div className="flex justify-center absolute">
        <div className="h-full responsive">
          <svg
            id="wave"
            style={{
              transform: "rotate(180deg)",
              transition: "0.3s",
              width: "100%",
              height: "auto",
            }}
            viewBox="1110 0 200 145"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto px-0 md:px-3 rounded-b2"
          >
            <defs>
              <linearGradient id="sw-gradient-0">
                <stop
                  stop-color={
                    values?.backgroundcolor
                      ? values?.backgroundcolor
                      : cardData?.backgroundcolor
                      ? cardData?.backgroundcolor
                      : "#00ffec"
                  }
                  offset="0%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: 1 }}
              fill="url(#sw-gradient-0)"
              d="M0,98L26.7,89.8C53.3,82,107,65,160,57.2C213.3,49,267,49,320,98C373.3,147,427,245,480,310.3C533.3,376,587,408,640,367.5C693.3,327,747,212,800,187.8C853.3,163,907,229,960,220.5C1013.3,212,1067,131,1120,89.8C1173.3,49,1227,49,1280,81.7C1333.3,114,1387,180,1440,171.5C1493.3,163,1547,82,1600,57.2C1653.3,33,1707,65,1760,114.3C1813.3,163,1867,229,1920,277.7C1973.3,327,2027,359,2080,334.8C2133.3,310,2187,229,2240,220.5C2293.3,212,2347,278,2400,285.8C2453.3,294,2507,245,2560,204.2C2613.3,163,2667,131,2720,138.8C2773.3,147,2827,196,2880,179.7C2933.3,163,2987,82,3040,40.8C3093.3,0,3147,0,3200,24.5C3253.3,49,3307,98,3360,171.5C3413.3,245,3467,343,3520,318.5C3573.3,294,3627,147,3680,73.5C3733.3,0,3787,0,3813,0L3840,0L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"
            ></path>
          </svg>
          <div className="relative -mt-32 md:-mt-28">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <img
                src={
                  values?.image
                    ? URL.createObjectURL(values?.image)
                    : cardData?.image
                    ? cardData?.image
                    : businesswomen
                }
                className="w-36 h-36 md:w-28 md:h-28 rounded-full border-4 border-white women"
                alt="Not Found"
              />
            </div>
            <div className="scrollable-container h-35 md:h-29 overflow-y-auto overflow-x-hidden">
              <div className="text-center">
                <p
                  className="pt-20 md:pt-14 text-2xl font-semibold"
                  style={{
                    color: values?.fontcolor
                      ? values?.fontcolor
                      : cardData?.fontcolor
                      ? cardData?.fontcolor
                      : "rgb(13 148 136)",
                  }}
                >
                  {values?.name
                    ? values?.name
                    : cardData?.name
                    ? cardData?.name
                    : "Sophie Mitchell"}
                </p>
                <p
                  className="my-2"
                  style={{
                    color: values?.fontcolor
                      ? values?.fontcolor
                      : cardData?.fontcolor
                      ? cardData?.fontcolor
                      : "rgb(20 184 166)",
                  }}
                >
                  {values?.title
                    ? values?.title
                    : cardData?.title
                    ? cardData?.title
                    : "Chief Marketing Officers "}
                </p>
                <p className="w-full md:w-80 px-6 break-words">
                  {values?.description
                    ? values?.description
                    : cardData?.description
                    ? cardData?.description
                    : "Luxury Auto Dealership Over 9 years of experience in auto sales, dedicated to bridging the gap between sales."}
                </p>

                <div className="flex items-start px-8 mt-10 md:mt-6">
                  <button
                    className="text-xl p-2.5 rounded-full"
                    onClick={() =>
                      handlePhone(values?.phone || cardData?.phone)
                    }
                    style={{
                      backgroundColor: values?.backgroundcolor
                        ? values?.backgroundcolor
                        : cardData?.backgroundcolor
                        ? cardData?.backgroundcolor
                        : "rgb(204 251 241)",
                      color: values?.fontcolor
                        ? values?.fontcolor
                        : cardData?.fontcolor
                        ? cardData?.fontcolor
                        : "rgb(20 184 166)",
                    }}
                  >
                    <FiPhoneCall />
                  </button>
                  <div className="text-start ml-2.5">
                    <p className="font-semibold">
                      {values?.phone
                        ? values?.phone
                        : cardData?.phone
                        ? cardData?.phone
                        : "+1 57458 98549"}
                    </p>
                    <p>Work</p>
                  </div>
                </div>
                <div className="flex items-start px-8 py-4 md:py-2">
                  <button
                    className="text-xl p-2.5 rounded-full"
                    onClick={() => handleMail(values?.email || cardData?.email)}
                    style={{
                      backgroundColor: values?.backgroundcolor
                        ? values?.backgroundcolor
                        : cardData?.backgroundcolor
                        ? cardData?.backgroundcolor
                        : "rgb(204 251 241)",
                      color: values?.fontcolor
                        ? values?.fontcolor
                        : cardData?.fontcolor
                        ? cardData?.fontcolor
                        : "rgb(20 184 166)",
                    }}
                  >
                    <IoMailOutline />
                  </button>
                  <div className="text-start ml-2.5">
                    <p className="font-semibold">
                      {values?.email
                        ? values?.email
                        : cardData?.email
                        ? cardData?.email
                        : "shophie.m@cloudiech.com"}
                    </p>
                    <p>Work</p>
                  </div>
                </div>
                <div className="flex items-start px-8">
                  <button
                    className="text-xl p-2.5 rounded-full"
                    onClick={() =>
                      handleRedirect(values?.website || cardData?.website)
                    }
                    style={{
                      backgroundColor: values?.backgroundcolor
                        ? values?.backgroundcolor
                        : cardData?.backgroundcolor
                        ? cardData?.backgroundcolor
                        : "rgb(204 251 241)",
                      color: values?.fontcolor
                        ? values?.fontcolor
                        : cardData?.fontcolor
                        ? cardData?.fontcolor
                        : "rgb(20 184 166)",
                    }}
                  >
                    <TbWorld />
                  </button>
                  <div className="text-start ml-2.5">
                    <p className="font-semibold break-words w-52">
                      {values?.website
                        ? values?.website
                        : cardData?.website
                        ? cardData?.website
                        : "www.cloudiech.com"}
                    </p>
                    <p>Company</p>
                  </div>
                </div>

                <div className="mt-8 md:mt-3">
                  <p className="text-lg">Connect with me on</p>
                  <div className="flex justify-evenly px-16 mt-2 md:mt-0">
                    <img
                      src={location}
                      className="w-10 h-10 bg-white shadow-lg p-2 rounded-full hover:cursor-pointer"
                      alt="Not Found"
                      onClick={() =>
                        handleAddress(values?.address || cardData?.address)
                      }
                      offset="0%"   
                    />
                    <img
                      src={instagram}
                      className="w-10 h-10 bg-white shadow-lg p-1 rounded-full hover:cursor-pointer"
                      alt="Not Found"
                      onClick={() =>
                        handleRedirect(values?.instagram || cardData?.instagram)
                      }
                    />
                    <img
                      src={facebook}
                      className="w-10 h-10 bg-white shadow-lg p-1 rounded-full hover:cursor-pointer"
                      alt="Not Found"
                      onClick={() => {
                        handleRedirect(values?.facebook || cardData?.facebook);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="flex justify-center items-center font-semibold w-96 md:w-18 py-2.5 -mt-4 md:mt-5 md:rounded-b-3xl hover:cursor-pointer"
                style={{
                  backgroundColor: values?.backgroundcolor
                    ? values?.backgroundcolor
                    : cardData?.backgroundcolor
                    ? cardData?.backgroundcolor
                    : "#00ffec",
                  color: values?.fontcolor
                    ? values?.fontcolor
                    : cardData?.fontcolor
                    ? cardData?.fontcolor
                    : "rgb(255 255 255)",
                }}
                onClick={handleDownloadVCard}
              >
                <MdOutlinePersonAddAlt className="mr-2" />
                Add to Contacts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalContactCard;
