import React, { useState } from "react";
import Header from "../Header";
import ThemeDesign from "../ThemeDesign";
import Preview from "../Preview";

function ChooseThemeDesign() {
  const [selectTheme, setSelectTheme] = useState("Light");

  const handleThemeChange = (theme) => {
    console.log("theeme ***** ", theme);
    setSelectTheme(theme);
  };

  return (
    <div className="pt-14">
      <Header />
      <div className="flex mt-14">
        <div className="w-1/2 overflow-y-auto">
          <ThemeDesign onThemeChange={handleThemeChange} />
        </div>
        <div className="w-1/2">
          <Preview selectTheme={selectTheme} />
        </div>
      </div>
    </div>
  );
}

export default ChooseThemeDesign;
