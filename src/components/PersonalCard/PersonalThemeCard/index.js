import React, { useEffect, useState } from "react";
import phone from "../../../assets/image/phone.png";
import triper from "../../../assets/image/triper.webp";
import businessmen from "../../../assets/image/businessmen.jpg";
import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaMapMarker } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { getProfileDetails } from "../../../services/ProfileServices";
import Loader from "../../Loader";

function PersonalThemeCard({ values }) {
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
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="absolute">
            <img
              src={phone}
              className="hidden md:block w-80 h-30"
              alt="Not Found"
            />
          </div>
          <div className="relative">
            <img
              src={
                values?.backgroundimage
                  ? URL.createObjectURL(values?.backgroundimage)
                  : cardData?.backgroundimage
                  ? cardData?.backgroundimage
                  : triper
              }
              className="w-80 h-40 px-p8 mt-10"
              alt="Not Found"
            />
            <div className="flex justify-center">
              <div className="text-center">
                <div className="flex justify-center">
                  <img
                    src={
                      values?.image
                        ? URL.createObjectURL(values?.image)
                        : cardData?.image
                        ? cardData?.image
                        : businessmen
                    }
                    className="w-32 h-32 rounded-full shadow-xl border-4 border-white -mt-16"
                    alt="Not Found"
                  />
                </div>
                <p className="text-2xl font-semibold mt-3">
                  {values?.name
                    ? values?.name
                    : cardData?.name
                    ? cardData?.name
                    : "Alex Thomson"}
                </p>
                <p>
                  {values?.title
                    ? values?.title
                    : cardData?.title
                    ? cardData?.title
                    : "Director"}
                </p>
                <p>
                  {values?.company
                    ? values?.company
                    : cardData?.company
                    ? cardData?.company
                    : "Company name"}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center px-7 space-x-3">
                <button
                  className="bg-zinc-900 text-white rounded-full p-2"
                  onClick={() => handleMail(values?.email || cardData?.email)}
                >
                  <IoMdMail />
                </button>
                <p>
                  {values?.email
                    ? values?.email
                    : cardData?.email
                    ? cardData?.email
                    : "hello@gmail.com"}
                </p>
              </div>
              <div className="flex items-center px-7 space-x-3">
                <button
                  className="bg-zinc-900 text-white rounded-full p-2"
                  onClick={() => handlePhone(values?.phone || cardData?.phone)}
                >
                  <MdCall />
                </button>
                <p>
                  {values?.phone
                    ? values?.phone
                    : cardData?.phone
                    ? cardData?.phone
                    : "+31 61166 87576"}
                </p>
              </div>
              <div className="flex items-center px-7 space-x-3">
                <button
                  className="bg-zinc-900 text-white rounded-full p-2"
                  onClick={() =>
                    handleRedirect(values?.website || cardData?.website)
                  }
                >
                  <TbWorld />
                </button>
                <p>
                  {values?.website
                    ? values?.website
                    : cardData?.website
                    ? cardData?.website
                    : "www.acmenet.com"}
                </p>
              </div>
              <div className="flex items-start px-7 space-x-3">
                <button
                  className="bg-zinc-900 text-white rounded-full p-2"
                  onClick={() =>
                    handleAddress(values?.address || cardData?.address)
                  }
                >
                  <FaMapMarker />
                </button>
                <p className="w-52 text-sm">
                  {values?.address
                    ? values?.address
                    : cardData?.address
                    ? cardData?.address
                    : " Acme LTD 1131 AW Amstertlam, The Netherlands"}
                </p>
              </div>

              <div className="px-p5">
                <button
                  type="button"
                  className="bg-blue-600 py-2 px-20 mt-3 rounded-full text-white font-semibold"
                  onClick={handleDownloadVCard}
                >
                  Add to contacts
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalThemeCard;
