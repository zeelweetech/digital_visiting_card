import React, { useState } from "react";
import { MdLock, MdVisibilityOff, MdEmail, MdVisibility } from "react-icons/md";
import { userLogin } from "../services/LoginServices";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BrandImage from "../assets/image/brandImage.png";

function Login() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validation = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values?.email) {
      newErrors.email = "Please enter an email address";
    } else if (!emailPattern.test(values.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!values?.password || values?.password?.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function setCookie(name, value, hours) {
    const now = new Date();
    const expirationDate = new Date(now.getTime() + hours * 60 * 60 * 1000);

    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      setLoading(true);
      const body = {
        email: values?.email,
        password: values?.password,
      };

      await userLogin({ body: body })
        .then((res) => {
          setCookie("token", res?.token, 24);
          localStorage.setItem("token", res?.token);
          toast.success(res?.message);
          setLoading(false);
          setValues({});
          if (localStorage.getItem("token")) {
            navigate("/profile_design");
          }
        })
        .catch((err) => {
          console.log("err", err);
          toast.error(err?.response?.data?.error);
          setLoading(false);
        });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex bg-darkblue lg:w-6/12 h-full justify-center items-center digital">
        {/* <p className="text-white text-2xl">Digital Visiting Card</p> */}
        <img
          src={BrandImage}
          className="bg-darkblue"
          style={{ backgroundColor: "#0065af" }}
          alt="Not Found"
        />
      </div>
      <div className="w-full lg:w-6/12 text-center flex justify-center items-center">
        <div className="w-full max-w-md p-8">
          {/* <p className="text-4xl font-bold text-darkblue">
            Digital Visiting Card
          </p> */}
          <p className="font-bold text-2xl mt-8">Login</p>

          <form className="mt-8">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 pl-10 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Email Address"
                type="text"
                name="email"
                value={values?.email}
                onChange={(e) => handleOnChange(e)}
              />
              <label className="absolute left-1 text-sm font-normal text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-blue-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                <MdEmail size={28} className="text-darkblue" />
              </label>
              {errors?.email && (
                <p className="text-xs text-red-500">{errors?.email}</p>
              )}
            </div>

            <div className="relative h-11 w-full min-w-[200px] mt-5">
              <input
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 pl-10 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={values?.password}
                onChange={(e) => handleOnChange(e)}
              />
              <label className="absolute left-1 text-sm font-normal text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-blue-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                <MdLock size={28} className="text-darkblue" />
              </label>
              <div
                className="absolute right-2 top-3 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <MdVisibilityOff size={24} className="text-darkblue" />
                ) : (
                  <MdVisibility size={24} className="text-darkblue" />
                )}
              </div>
              {errors?.password && (
                <p className="text-xs text-red-500">{errors?.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="inline justify-center bg-darkblue rounded-full py-2 px-10 text-white text-base font-semibold mt-8"
              onClick={(e) => handleOnSubmit(e)}
            >
              Login
              {loading && <Loader height={25} width={25} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
