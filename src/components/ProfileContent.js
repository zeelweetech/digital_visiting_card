import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { FaArrowLeft, FaArrowRight, FaPaypal } from "react-icons/fa";
import { decodedToken, handleNumberKeyDown } from "../utils";
import {
  addBusinessDetails,
  addPersonalDetails,
} from "../services/ProfileServices";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function ProfileContent({
  setPage,
  handleOnChange,
  values,
  setValues,
  errors,
  setErrors,
  selectTheme,
  selectCard,
}) {
  const { userId } = decodedToken();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const path = window.location.pathname.split("/").pop();
  console.log("selectCard", selectCard);

  const validation = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values?.email) {
      newErrors.email = "Please enter an email";
    } else if (!emailPattern.test(values?.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!values?.phone) {
      newErrors.phone = "Please enter a phone";
    }

    if (!values?.address) {
      newErrors.address = "Please enter an address";
    }

    // if (
    //   selectCard === "PersonalContactCard" ||
    //   selectCard === "PersonalLinksCard" ||
    //   selectCard === "PersonalBusinessCard" ||
    //   selectCard === "PersonalPreviewCard" ||
    //   path === "business_profile_design"
    // ) {
    //   if (!values?.instagram) {
    //     newErrors.instagram = "Please enter an instagram";
    //   }
    // }

    // if (!values?.website) {
    //   newErrors.website = "Please enter a website";
    // }

    // if (
    //   selectCard === "PersonalContactCard" ||
    //   selectCard === "PersonalLinksCard" ||
    //   selectCard === "PersonalBusinessCard" ||
    //   selectCard === "PersonalPreviewCard" ||
    //   path === "business_profile_design"
    // ) {
    //   if (!values?.facebook) {
    //     newErrors.facebook = "Please enter a facebook";
    //   }
    // }

    // if (
    //   selectCard === "PersonalBusinessCard" ||
    //   selectCard === "PersonalLinksCard"
    // ) {
    //   if (!values?.linkedin) {
    //     newErrors.linkedin = "Please enter a linkedin";
    //   }

    //   if (!values?.paypal) {
    //     newErrors.paypal = "Please enter a paypal";
    //   }
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      setLoading(true);
      if (path === "business_profile_design") {
        var formdata = new FormData();
        formdata.append("image", values?.image);
        formdata.append("name", values?.name);
        formdata.append("title", values?.title);
        formdata.append("description", values?.description);
        formdata.append("email", values?.email);
        formdata.append("phone", values?.phone);
        formdata.append("address", values?.address);
        formdata.append("website", values?.website);
        formdata.append("facebook", values?.facebook);
        formdata.append("instagram", values?.instagram);
        formdata.append("userId", userId);
        formdata.append("color", selectTheme);
        formdata.append("category", "businesscard");
      } else {
        var formdata = new FormData();
        formdata.append("image", values?.image);
        formdata.append("name", values?.name);
        formdata.append("title", values?.title);
        formdata.append("backgroundImage", values?.backgroundimage);
        formdata.append("description", values?.description);
        formdata.append("company", values?.company);
        formdata.append("backgroundcolor", values?.backgroundcolor);
        formdata.append("fontcolor", values?.fontcolor);
        formdata.append("email", values?.email);
        formdata.append("phone", values?.phone);
        formdata.append("address", values?.address);
        formdata.append("website", values?.website);
        formdata.append("facebook", values?.facebook);
        formdata.append("instagram", values?.instagram);
        formdata.append("linkedin", values?.linkedin);
        formdata.append("paypal", values?.paypal);
        formdata.append("userId", userId);
        formdata.append("color", selectTheme);
        formdata.append("category", "personalcard");
        formdata.append(
          "cardName",
          selectCard === "PersonalBusinessCard"
            ? "PersonalBusinessCard"
            : selectCard === "PersonalContactCard"
            ? "PersonalContactCard"
            : selectCard === "PersonalDetailsCard"
            ? "PersonalDetailsCard"
            : selectCard === "PersonalLinksCard"
            ? "PersonalLinksCard"
            : selectCard === "PersonalPreviewCard"
            ? "PersonalPreviewCard"
            : selectCard === "PersonalThemeCard"
            ? "PersonalThemeCard"
            : ""
        );
      }

      await (path === "business_profile_design"
        ? addBusinessDetails({ body: formdata })
        : addPersonalDetails({ body: formdata })
      )
        .then((res) => {
          console.log("res", res);
          toast.success(res?.message);
          setLoading(false);
          if (path === "business_profile_design") {
            navigate(
              `/business_digital_card/${res?.digitalBusinessCard?.name}/${res?.digitalBusinessCard?.businessCardId}`
            );
          } else if (path === "personal_profile_design") {
            if (selectCard === "PersonalBusinessCard") {
              navigate(
                `/PersonalBusinessCard/${res?.digitalPersonalCard?.name}/${res?.digitalPersonalCard?.personalCardId}`
              );
            } else if (selectCard === "PersonalContactCard") {
              navigate(
                `/PersonalContactCard/${res?.digitalPersonalCard?.name}/${res?.digitalPersonalCard?.personalCardId}`
              );
            } else if (selectCard === "PersonalDetailsCard") {
              navigate(
                `/PersonalDetailsCard/${res?.digitalPersonalCard?.name}/${res?.digitalPersonalCard?.personalCardId}`
              );
            } else if (selectCard === "PersonalLinksCard") {
              navigate(
                `/PersonalLinksCard/${res?.digitalPersonalCard?.name}/${res?.digitalPersonalCard?.personalCardId}`
              );
            } else if (selectCard === "PersonalPreviewCard") {
              navigate(
                `/PersonalPreviewCard/${res?.digitalPersonalCard?.name}/${res?.digitalPersonalCard?.personalCardId}`
              );
            } else if (selectCard === "PersonalThemeCard") {
              navigate(
                `/PersonalThemeCard/${res?.digitalPersonalCard?.name}/${res?.digitalPersonalCard?.personalCardId}`
              );
            }
          }
        })
        .catch((err) => {
          console.log("err", err);
          toast.error(err?.response?.data?.error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <form className="flex flex-col items-center w-full max-w-md">
        <p className="text-3xl font-semibold">Add Contact Options</p>

        <div className="flex flex-col items-center w-full max-w-lg mt-10 py-3">
          <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <CiMail />
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+ Email"
              name="email"
              value={values?.email}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          {errors?.email && (
            <p className="text-xs text-red-500">{errors?.email}</p>
          )}
        </div>

        <div className="flex flex-col items-center w-full max-w-lg py-3">
          <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <MdLocalPhone />
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+ Phone"
              name="phone"
              value={values?.phone}
              onChange={(e) => handleOnChange(e)}
              onKeyDown={handleNumberKeyDown}
              maxLength={10}
            />
          </div>
          {errors?.phone && (
            <p className="text-xs text-red-500">{errors?.phone}</p>
          )}
        </div>

        <div className="flex flex-col items-center w-full max-w-lg py-3">
          <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <FiMapPin />
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+ Main Street, City, State, Country"
              name="address"
              value={values?.address}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          {errors?.address && (
            <p className="text-xs text-red-500">{errors?.address}</p>
          )}
        </div>

        {(selectCard === "PersonalContactCard" ||
          selectCard === "PersonalLinksCard" ||
          selectCard === "PersonalBusinessCard" ||
          selectCard === "PersonalPreviewCard" ||
          path === "business_profile_design") && (
          <div className="flex flex-col items-center w-full max-w-lg py-3">
            <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
              <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <IoLogoInstagram />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+ Instagram"
                name="instagram"
                value={values?.instagram}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            {/* {errors?.instagram && (
              <p className="text-xs text-red-500">{errors?.instagram}</p>
            )} */}
          </div>
        )}

        <div className="flex flex-col items-center w-full max-w-lg py-3">
          <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <BiWorld />
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+ Website"
              name="website"
              value={values?.website}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          {/* {errors?.website && (
            <p className="text-xs text-red-500">{errors?.website}</p>
          )} */}
        </div>

        {(selectCard === "PersonalContactCard" ||
          selectCard === "PersonalLinksCard" ||
          selectCard === "PersonalBusinessCard" ||
          selectCard === "PersonalPreviewCard" ||
          path === "business_profile_design") && (
          <div className="flex flex-col items-center w-full max-w-lg py-3">
            <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
              <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <TiSocialFacebook />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+ Facebook"
                name="facebook"
                value={values?.facebook}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            {/* {errors?.facebook && (
              <p className="text-xs text-red-500">{errors?.facebook}</p>
            )} */}
          </div>
        )}

        {(selectCard === "PersonalBusinessCard" ||
          selectCard === "PersonalLinksCard") && (
          <div className="flex flex-col items-center w-full max-w-lg py-3">
            <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
              <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <TiSocialLinkedin />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+ Linkedin"
                name="linkedin"
                value={values?.linkedin}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            {/* {errors?.linkedin && (
              <p className="text-xs text-red-500">{errors?.linkedin}</p>
            )} */}
          </div>
        )}

        {(selectCard === "PersonalBusinessCard" ||
          selectCard === "PersonalLinksCard") && (
          <div className="flex flex-col items-center w-full max-w-lg py-3">
            <div className="flex w-full max-w-md border-x border-y rounded-md hover:border-blue-700">
              <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-white border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <FaPaypal />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-e-md bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+ PayPal"
                name="paypal"
                value={values?.paypal}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            {/* {errors?.paypal && (
              <p className="text-xs text-red-500">{errors?.paypal}</p>
            )} */}
          </div>
        )}

        <div className="flex sm:flex-row justify-between sm:space-x-4 w-full pt-10">
          <div
            className="flex items-center space-x-2"
            onClick={() => {
              if (selectCard) {
                setPage(2);
                setErrors("");
              } else {
                setPage(1);
                setErrors("");
              }
            }}
          >
            <FaArrowLeft className="text-darkblue text-sm" />
            <button className=" text-darkblue font-semibold text-xl">
              Back
            </button>
          </div>
          <button
            className="flex items-center bg-darkblue text-white font-semibold text-sm rounded-full py-1.5 px-5"
            type="submit"
            onClick={(e) => handleOnSubmit(e)}
          >
            PUBLISH YOUR DIGITAL CARD <FaArrowRight className="ml-2 text-xs" />
            {loading && <Loader height={25} width={25} />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileContent;
