import React from "react";
import phone from "../../../assets/image/phone.png";

function PersonalContactCard() {
  return (
    <div className="flex flex-col items-center">
      <div className="top-0 left-0 w-20 pt-7">
        <svg
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full px-3"
        >
          <defs>
            <linearGradient id="sw-gradient-0">
              <stop stopColor="rgba(37, 230, 217, 1)" offset="0%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,160L120,149.3C240,139,480,117,720,117.3C960,117,1200,139,1440,138.7C1680,139,1920,117,2160,117.3C2400,117,2640,139,2880,122.7C3120,107,3360,53,3600,37.3C3840,21,4080,43,4320,90.7C4560,139,4800,213,5040,208C5280,203,5520,117,5760,74.7C6000,32,6240,32,6480,37.3C6720,43,6960,53,7200,96C7440,139,7680,213,7920,213.3C8160,213,8400,139,8640,101.3C8880,64,9120,64,9360,74.7C9600,85,9840,107,10080,101.3C10320,96,10560,64,10800,58.7C11040,53,11280,75,11520,96C11760,117,12000,139,12240,165.3C12480,192,12720,224,12960,202.7C13200,181,13440,107,13680,69.3C13920,32,14160,32,14400,32C14640,32,14880,32,15120,26.7C15360,21,15600,11,15840,21.3C16080,32,16320,64,16560,101.3C16800,139,17040,181,17160,202.7L17280,224L17280,320L17160,320C17040,320,16800,320,16560,320C16320,320,16080,320,15840,320C15600,320,15360,320,15120,320C14880,320,14640,320,14400,320C14160,320,13920,320,13680,320C13440,320,13200,320,12960,320C12720,320,12480,320,12240,320C12000,320,11760,320,11520,320C11280,320,11040,320,10800,320C10560,320,10320,320,10080,320C9840,320,9600,320,9360,320C9120,320,8880,320,8640,320C8400,320,8160,320,7920,320C7680,320,7440,320,7200,320C6960,320,6720,320,6480,320C6240,320,6000,320,5760,320C5520,320,5280,320,5040,320C4800,320,4560,320,4320,320C4080,320,3840,320,3600,320C3360,320,3120,320,2880,320C2640,320,2400,320,2160,320C1920,320,1680,320,1440,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
      <div className="">
        <img src={phone} className="w-80" alt="Phone" />
      </div>
    </div>
  );
}

export default PersonalContactCard;
