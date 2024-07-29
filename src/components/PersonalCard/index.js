import React from "react";
import phone from "../../assets/image/Screenshot 2024-07-29 142859.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function PersonalCard() {
  const CardImage = [
    {
      image: <img src={phone} className=" w-52 h-80" alt="Not Found" />,
    },
    {
      image: <img src={phone} className=" w-52 h-80" alt="Not Found" />,
    },
    {
      image: <img src={phone} className=" w-52 h-80" alt="Not Found" />,
    },
    {
      image: <img src={phone} className=" w-52 h-80" alt="Not Found" />,
    },
    {
      image: <img src={phone} className=" w-52 h-80" alt="Not Found" />,
    },
    {
      image: <img src={phone} className=" w-52 h-80" alt="Not Found" />,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-24 gap-y-10">
        {CardImage.map((data) => (
          <div className="text-center">
            <div className="flex justify-center">{data.image}</div>
            <input type="radio" name="design" className="w-7 h-7 mt-3" />
          </div>
        ))}
      </div>

      <div className="flex justify-around mt-16">
          <div className="flex items-center space-x-2">
            <FaArrowLeft className="text-darkblue text-sm" />
            <button
              className=" text-darkblue font-semibold text-xl"
              // onClick={() => setPage(0)}
            >
              Back
            </button>
          </div>
          <button
            className="flex items-center bg-blue-500 text-white font-semibold px-14 py-2 rounded-full"
            // onClick={() => {
            //   selectTheme
            //     ? setPage(2)
            //     : toast.error("please select theme color");
            // }}
          >
            NEXT <FaArrowRight className="ml-3" />
          </button>
        </div>
    </div>
  );
}

export default PersonalCard;
