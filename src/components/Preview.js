// import React from "react";
// import phone from "../assets/image/phone.png";
// import avatar from "../assets/image/avatar.png";
// import { CiMail } from "react-icons/ci";
// import { MdLocalPhone } from "react-icons/md";
// import { FiMapPin } from "react-icons/fi";

// function Preview() {
//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen p-4">
//       <div className="flex flex-col items-center w-full max-w-md relative">
//         <img
//           src={phone}
//           className="rounded-2 w-80 h-30 bg-gray-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           alt="Not Found"
//         />
//         <div className="ml-4 overflow-y-auto h-h30">  
//           <div className="bg-gray-200 w-17 h-72 rounded-3xl flex flex-col justify-center relative text-center mt-24">
//             <img
//               src={avatar}
//               className="rounded-full border-4 border-white w-36 h-36 -mt-40 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               alt="Not Found"
//             />
//             <p className="text-3xl pt-12">Name Noah</p>
//             <p className="text-xl pt-2">Title</p>
//             <p className="pt-3 px-5">
//               Luxury Auto Dealership Over 9 years of experience in auto sales,
//               dedicated to bridging the gap between sales and customers. +1 [345]
//               678 - 888
//             </p>
//           </div>

//           <button className="relative bg-neutral-700 text-white font-semibold mt-4 py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto">
//             <CiMail className="ml-5 mr-20" />
//             <span>Email</span>
//           </button>
//           <button className="relative bg-neutral-700 text-white font-semibold my-3 py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto">
//             <MdLocalPhone className="ml-5 mr-20" />
//             <span>Phone</span>
//           </button>
//           <button className="relative bg-neutral-700 text-white font-semibold py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto">
//             <FiMapPin className="ml-5 mr-20" />
//             <span>Address</span>
//           </button>
//           <button className="relative bg-neutral-700 text-white font-semibold my-3 py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto">
//             <MdLocalPhone className="ml-5 mr-20" />
//             <span>Phone</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Preview;



import React from "react";
import phone from "../assets/image/phone.png";
import avatar from "../assets/image/avatar.png";
import preview_logo from "../assets/image/preview_logo.png"
import { CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

function Preview({selectTheme}) {

  const themeClasses = {
    Light: 'bg-theme',
    Dark: 'bg-black',
    Neutral: 'bg-theme1',
    Gradient: 'bg-theme2',
    Energetic: 'bg-custom-gradient',
    Ambitious: 'bg-custom1-gradient',
  };

  const themeClass = themeClasses[selectTheme] || 'bg-theme';

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="flex flex-col items-center w-full max-w-md relative">
        <img
          src={phone}
          className={`rounded-2 w-80 h-30 ${themeClass} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          alt="Not Found"
        />
        <div className="ml-4 overflow-y-auto h-h30"> 
          <div className="relative bg-white rounded-3xl shadow-xl h-56 flex justify-center">
            <img src={preview_logo} className="w-24 h-28 mt-8" alt="Not Found" />  
          </div> 
          <div className="bg-white shadow-xl w-17 h-72 rounded-3xl flex flex-col justify-center relative text-center mt-3">
            <img
              src={avatar}
              className="rounded-full border-4 border-white w-36 h-36 -mt-40 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              alt="Not Found"
            />
            <p className="text-3xl pt-12">Name Noah</p>
            <p className="text-xl pt-2">Title</p>
            <p className="pt-3 px-5">
              Luxury Auto Dealership Over 9 years of experience in auto sales,
              dedicated to bridging the gap between sales and customers. +1 [345]
              678 - 888
            </p>
          </div>

          <button className="relative bg-neutral-700 text-white font-semibold mt-4 py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto">
            <CiMail className="ml-5 mr-20" />
            <span>Email</span>
          </button>
          <button className="relative bg-neutral-700 text-white font-semibold my-3 py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto">
            <MdLocalPhone className="ml-5 mr-20" />
            <span>Phone</span>
          </button>
          <button className="relative bg-neutral-700 text-white font-semibold py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto">
            <FiMapPin className="ml-5 mr-20" />
            <span>Address</span>
          </button>
          <button className="relative bg-neutral-700 text-white font-semibold my-3 py-2.5 w-17 rounded-full shadow-md flex items-center overflow-auto">
            <MdLocalPhone className="ml-5 mr-20" />
            <span>Phone</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
