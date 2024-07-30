import React from "react";
import phone from "../../../assets/image/phone.png";

function PersonalThemeCard() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <img src={phone} className="w-80 h-30" alt="Not Found" />
        </div>
      </div>
    </div>
  );
}

export default PersonalThemeCard;
