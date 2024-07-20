import React from "react";
import ThemeImage from "../assets/image/Dark-Mode-Pillar.png";

function ThemeColor() {
  return (
    <div className="justify-center border-2">
      <div className="flex justify-center mt-24">
        <div className="text-3xl font-bold text-blue-700">
          Choose Theme Color
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <img className="h-1/2 w-1/2" src={ThemeImage} />
      </div>
      <div className="flex justify-center mt-14">
        <div className="">
          <input type="radio" />
          <label>Light</label>
        </div>
        <div>
          <input type="radio" />
          <label>Dark</label>
        </div>
      </div>
    </div>
  );
}

export default ThemeColor;
