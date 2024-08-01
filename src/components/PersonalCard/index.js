import React from "react";
import personaldetailscard from "../../assets/image/personaldetailscard.png";
import Personalbusinesscard from "../../assets/image/Personalbusinesscard.png";
import personallinkscard from "../../assets/image/personallinkscard.png";
import personalthemecard from "../../assets/image/personalthemecard.png"
import personalpreviewcard from "../../assets/image/personalpreviewcard.png"
import personalcontactcard from "../../assets/image/personalcontactcard.png"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function PersonalCard({ setSelectCard, selectCard, setPage }) {
  const navigate = useNavigate();

  const CardImage = [
    {
      image: (
        <img
          src={Personalbusinesscard}
          className=" w-52 h-96"
          alt="Not Found"
        />
      ),
      cardname: "PersonalBusinessCard",
    },
    {
      image: <img src={personalcontactcard} className=" w-52 h-96" alt="Not Found" />,
      cardname: "PersonalContactCard",
    },
    {
      image: <img src={personaldetailscard} className=" w-52 h-96" alt="Not Found" />,
      cardname: "PersonalDetailsCard",
    },
    {
      image: (
        <img src={personallinkscard} className=" w-52 h-96" alt="Not Found" />
      ),
      cardname: "PersonalLinksCard",
    },
    {
      image: <img src={personalpreviewcard} className=" w-52 h-96" alt="Not Found" />,
      cardname: "PersonalPreviewCard",
    },
    {
      image: <img src={personalthemecard} className=" w-52 h-96" alt="Not Found" />,
      cardname: "PersonalThemeCard",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-24 gap-y-10">
        {CardImage?.map((item) => (
          <div className="text-center">
            <div className="flex justify-center">{item?.image}</div>
            <input
              className="w-7 h-7 mt-3 cursor-pointer"
              type="radio"
              name="card"
              value={item?.cardname}
              checked={selectCard === item?.cardname}
              onChange={() => {
                setSelectCard(item?.cardname);
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-around mt-16">
        <div className="flex items-center space-x-2">
          <FaArrowLeft className="text-darkblue text-sm" />
          <button
            className=" text-darkblue font-semibold text-xl"
            onClick={() => navigate("/home_page")}
          >
            BACK
          </button>
        </div>
        <button
          className="flex items-center bg-blue-500 text-white font-semibold px-14 py-2 rounded-full"
          onClick={() => {
            if (selectCard) {
              if (selectCard === "PersonalPreviewCard") {
                setPage(1);
              } else {
                setPage(2);
              }
            } else {
              toast.error("please select personal card");
            }
          }}
        >
          NEXT <FaArrowRight className="ml-3" />
        </button>
      </div>
    </div>
  );
}

export default PersonalCard;
