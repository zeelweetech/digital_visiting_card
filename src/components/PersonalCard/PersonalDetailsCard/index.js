import React, { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { FaLink, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdDownload, IoMdMail } from "react-icons/io";
import businessmen from "../../../assets/image/businessmen.jpg";
import phone from "../../../assets/image/phone.png";
import { useNavigate, useParams } from "react-router-dom";
import { getProfileDetails } from "../../../services/ProfileServices";
import Loader from "../../Loader";

function PersonalDetailsCard({ values }) {
  const { id } = useParams();
  const [cardData, setCardData] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Businesslink = values?.businessCardLink || cardData?.businessCardLink;
  const Link = Businesslink ? decodeURIComponent(Businesslink).split("/") : []; 
  
  const CardDetails = [
    {
      Icon: <FaPhoneAlt />,
      Filed: "Phone",
      filedDetail: values?.phone
        ? values?.phone
        : cardData?.phone
        ? cardData?.phone
        : "+91-97430-12345",
    },
    {
      Icon: <IoMdMail />,
      Filed: "Email",
      filedDetail: values?.email
        ? values?.email
        : cardData?.email
        ? cardData?.email
        : "contact@gmail.com",
    },
    {
      Icon: <FaWhatsapp />,
      Filed: "Whatsapp",
      filedDetail: values?.phone
        ? values?.phone
        : cardData?.phone
        ? cardData?.phone
        : "+91-97430-12345",
    },
    {
      Icon: <BiWorld />,
      Filed: "Website",
      filedDetail: values?.website
        ? values?.website
        : cardData?.website
        ? cardData?.website
        : "www.websolutions.com",
    },
    {
      Icon: <FaMapMarkerAlt />,
      Filed: "Address",
      filedDetail: values?.address
        ? values?.address
        : cardData?.address
        ? cardData?.address
        : "Luxury Auto Dealership Over 9 years of experience.",
    },
    {
      Icon: <FaLink />,
      Filed: "Link",
      filedDetail: Link?.[4] ? Link[4] : "No Link available",
    }
  ];

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

  const handleWhatsApp = (phone) => {
    if (phone) {
      window.open(`https://wa.me/${phone.replace(/[^\d]/g, "")}`, "_blank");
    }
  };

  return (
    <div className="flex justify-center items-center h-0 md:h-screen mt-22 md:mt-0">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <img
            src={phone}
            className={`hidden md:block absolute rounded-2 w-80 h-42`}
            alt="Not Found"
          />
          <div className="relative flex justify-center text-center h-30 items-center px-9 pt-10">
            <div className="md:h-[38rem] scrollable-container overflow-y-auto overflow-x-hidden">
              <div className="flex justify-center text-center">
                <img
                  src={
                    values?.image
                      ? URL.createObjectURL(values?.image)
                      : cardData?.image
                      ? cardData?.image
                      : businessmen
                  }
                  className="w-40 h-40 mt-6"
                  alt="Not Found"
                />
              </div>
              <p className="text-2xl md:text-xl font-semibold mt-5 md:mt-0 w-full md:w-[15.5rem] break-words">
                {values?.name
                  ? values?.name
                  : cardData?.name
                  ? cardData?.name
                  : "Mark Zuckerberg"}
              </p>
              {/* <p>Proprietor</p> */}
              <div className="flex justify-center">
                <p className="font-semibold w-52 break-words">
                  {values?.title
                    ? values?.title
                    : cardData?.title
                    ? cardData?.title
                    : "Directore"}
                </p>
              </div>
              <div className="flex justify-center">
                <p className="font-semibold w-52 break-words">
                  {values?.company
                    ? values?.company
                    : cardData?.company
                    ? cardData?.company
                    : "Company Name"}
                </p>
              </div>

              <div className="space-x-4 md:space-x-2 mt-6 md:mt-3">
                  <button
                    className="bg-theme p-2 text-xl"
                    onClick={() =>
                      handlePhone(values?.phone || cardData?.phone)
                    }
                  >
                    <FaPhoneAlt />
                  </button>
                  <button
                    className="bg-theme p-2 text-xl"
                    onClick={() => handleMail(values?.email || cardData?.email)}
                  >
                    <IoMdMail />
                  </button>
                  <button
                    className="bg-theme p-2 text-xl"
                    onClick={() =>
                      handlePhone(values?.phone || cardData?.phone)
                    }
                  >
                    <FaWhatsapp />
                  </button>
                  <button
                    className="bg-theme p-2 text-xl"
                    onClick={() =>
                      handleAddress(values?.address || cardData?.address)
                    }
                  >
                    <FaMapMarkerAlt />
                  </button>
                  <button
                    className="bg-theme p-2 text-xl"
                    onClick={() =>
                      handleRedirect(values?.website || cardData?.website)
                    }
                  >
                    <BiWorld />
                  </button>
                  <button
                    className="bg-theme p-2 text-xl"
                    onClick={() =>
                      handleRedirect(
                        values?.businessCardLink || cardData?.businessCardLink
                      )
                    }
                  >
                    <FaLink />
                  </button>
              </div>

              <div className="bg-slate-200 p-1 mt-10 md:mt-5 w-full sm:w-auto">
                {CardDetails?.map((data) => (
                  <div
                    key={data.Filed}
                    className="flex items-center bg-theme pb-2 px-2 text-start space-x-2 w-full sm:w-60 mt-1"
                  >
                    <button className="bg-white p-2 text-xl">
                      {data.Icon}
                    </button>
                    <div className="text-sm flex-1">
                      <p className="font-semibold">{data.Filed}</p>
                      <p
                        className={`${
                          data.Filed === "Address" ? "md:w-44 break-words" : ""
                        } ${
                          data.Filed === "Website" ? "md:w-44 break-words" : ""
                        } ${
                          data.Filed === "Link" ? "md:w-44 break-words" : ""
                        }`}
                      >
                        {data.filedDetail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="flex items-center font-semibold bg-blue-950 text-white px-16 md:px-3 py-2 md:py-1 mt-5 md:mt-2 rounded-sm">
                  Save To Phone
                  <IoMdDownload className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalDetailsCard;
