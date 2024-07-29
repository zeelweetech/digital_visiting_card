import React from "react";
import phone from "../../assets/image/phone.png";
import avatar from "../../assets/image/avatar.png";
import { IoMdMail, IoMdDownload } from "react-icons/io";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

function PersonalPreview() {
  const CardDetails = [
    {
      Icon: <FaPhoneAlt />,
      Filed: "Phone",
      filedDetail: "+91-97430-12345",
    },
    {
      Icon: <IoMdMail />,
      Filed: "Whatsapp",
      filedDetail: "+91-97430-75457",
    },
    {
      Icon: <FaWhatsapp />,
      Filed: "Email",
      filedDetail: "contact@gmail.com",
    },
    {
      Icon: <FaMapMarkerAlt />,
      Filed: "Website",
      filedDetail: "www.websolutions.com",
    },
    {
      Icon: <BiWorld />,
      Filed: "Address",
      filedDetail: "Luxury Auto Dealership Over 9 years of experience.",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img
          src={phone}
          className="hidden md:block absolute rounded-2 w-80 h-42"
          alt="Not Found"
        />
        <div className={`relative flex justify-center text-center h-42 items-center px-9`}>
          <div>
            <div className="flex justify-center text-center">
              <img src={avatar} className="w-40 h-40 mt-6" alt="Not Found" />
            </div>
            <p className="text-xl font-semibold">Name: John Doe</p>
            {/* <p>Proprietor</p> */}
            <p className="font-semibold">Title</p>

            <div className="space-x-2 mt-3">
              <button className="bg-theme p-2 text-xl">
                <FaPhoneAlt />
              </button>
              <button className="bg-theme p-2 text-xl">
                <IoMdMail />
              </button>
              <button className="bg-theme p-2 text-xl">
                <FaWhatsapp />
              </button>
              <button className="bg-theme p-2 text-xl">
                <FaMapMarkerAlt />
              </button>
              <button className="bg-theme p-2 text-xl">
                <BiWorld />
              </button>
            </div>

            <div className="bg-slate-200 p-1 mt-5 w-full sm:w-auto">
              {CardDetails.map((data) => (
                <div
                  key={data.Filed}
                  className="flex items-center bg-theme pb-2 px-2 text-start space-x-2 w-full sm:w-60 mt-1"
                >
                  <button className="bg-white p-2 text-xl">{data.Icon}</button>
                  <div className="text-sm">
                    <p className="font-semibold">{data.Filed}</p>
                    <p>{data.filedDetail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="flex items-center font-semibold bg-blue-950 text-white px-3 py-1 mt-3 rounded-sm">
                Save To Phone
                <IoMdDownload className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalPreview;
