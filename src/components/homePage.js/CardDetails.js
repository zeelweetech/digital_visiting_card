import React from "react";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

function CardDetails({ cardDetails, loading }) {
  const navigate = useNavigate();
  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7 px-4 sm:px-10 lg:px-20 py-10 cursor-pointer">
          {cardDetails?.map((item, index) => (
            <div key={index} className="text-center">
              <div
                className="max-w-xs sm:max-w-sm lg:max-w-md rounded overflow-hidden bg-white border-2 shadow-lg h-44 mx-auto"
                onClick={() => {
                  if (item?.category === "businesscard") {
                    navigate(
                      `/business_digital_card/${item?.name}/${item?.businessCardId}`
                    );
                  } else if (item?.category === "personalcard") {
                    navigate(
                      `/personal_digital_card/${item?.name}/${item?.personalCardId}`
                    );
                  }
                }}
              >
                <div className="px-4 sm:px-6 lg:px-8 py-4">
                  <div className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 text-center">
                    {item?.title}
                  </div>
                </div>
              </div>
              <p className="text-lg sm:text-xl lg:text-xl font-semibold pt-3">
                {item?.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardDetails;
