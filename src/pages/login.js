import React from "react";
import { MdLock, MdVisibilityOff, MdEmail } from "react-icons/md";

function Login() {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex bg-darkblue lg:w-6/12 h-full justify-center items-center digital">
        <p className="text-white text-2xl">Digital Visiting Card</p>
      </div>
      <div className="w-full lg:w-6/12 text-center flex justify-center items-center bg-sky-50">
        <div className="w-full max-w-md p-8">
          <p className="text-4xl font-bold text-darkblue">
            Digital Visiting Card
          </p>
          <p className="font-bold text-2xl mt-8">Login</p>

          <form className="mt-8">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                placeholder="Email Address/Phone Number"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 pl-10 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="absolute left-1 text-sm font-normal text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-blue-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                <MdEmail size={28} className="text-darkblue" />
              </label>
            </div>

            <div className="relative h-11 w-full min-w-[200px] mt-5">
              <input
                placeholder="Password"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 pl-10 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="absolute left-1 text-sm font-normal text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-blue-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                <MdLock size={28} className="text-darkblue" />
              </label>
              <div
                className="absolute right-2 top-3 cursor-pointer text-gray-500"
                // onClick={togglePasswordVisibility}
              >
                <MdVisibilityOff size={24} className="text-darkblue" />
                {/* {showPassword ? <MdVisibilityOff size={24} /> : <MdVisibility size={24} />} */}
              </div>
            </div>

            <button className="bg-darkblue rounded-full py-2 px-10 text-white text-base font-semibold mt-8">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
