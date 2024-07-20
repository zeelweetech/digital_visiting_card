import React from "react";
import ThemeImage from "../assets/image/Dark-Mode-Pillar.png";

function ThemeColor() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-sky-50">
      <p className="text-3xl text-center font-bold text-blue-700">Choose Theme Color</p>

      <div className="flex justify-center mt-14">
        <img className="w-full max-w-md h-auto p-5" src={ThemeImage} alt="Not Found"/>
      </div>

      <div className="flex justify-around mt-14 w-full max-w-2xl">
        <div>
          <input type="radio" name="Theme" style={{width: 20, height:20}}/>
          <label className="text-2xl ml-2 font-semibold">Light</label>
        </div>
        <div>
          <input type="radio" name="Theme" style={{width: 20, height:20}}/>
          <label className="text-2xl ml-2 font-semibold">Dark</label>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-darkblue text-white font-semibold rounded-full py-2 px-10">Done</button>
      </div>
    </div>
  );
}

export default ThemeColor;
