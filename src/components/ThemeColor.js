import React, { useState } from "react";
import ThemeImage from "../assets/image/Dark-Mode-Pillar.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function ThemeColor() {
  const [themeValue, setThemeValue] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log("themeValue", themeValue);
  const handleChange = (event) => {
    setThemeValue(event.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    if (themeValue) {
      console.log(`Selected Theme: ${themeValue}`);
      localStorage.setItem("ThemeColor", themeValue);
      setLoading(false);
      navigate("/profile");
    } else {
      toast.error("Please select the theme color");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-sky-50">
      <p className="text-3xl text-center font-bold text-blue-700">
        Choose Theme Color
      </p>

      <div className="flex justify-center mt-14">
        <img
          className="w-full max-w-md h-auto p-5"
          src={ThemeImage}
          alt="Not Found"
        />
      </div>

      <div className="flex justify-around mt-14 w-full max-w-2xl">
        <div>
          <input
            type="radio"
            name="Theme"
            value="Light"
            checked={themeValue === "Light"}
            onChange={handleChange}
            style={{ width: 20, height: 20 }}
          />
          <label className="text-2xl ml-2 font-semibold">Light</label>
        </div>
        <div>
          <input
            type="radio"
            name="Theme"
            value="Dark"
            checked={themeValue === "Dark"}
            onChange={handleChange}
            style={{ width: 20, height: 20 }}
          />
          <label className="text-2xl ml-2 font-semibold">Dark</label>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          type="submit"
          className="bg-darkblue text-white font-semibold rounded-full py-2 px-10"
          onClick={handleSubmit}
        >
          Done
          {loading && <Loader height={25} width={25} />}
        </button>
      </div>
    </div>
  );
}

export default ThemeColor;
