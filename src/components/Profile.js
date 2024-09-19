import React, { useState } from "react";
import avatar from "../assets/image/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";

function Profile({
  setPage,
  handleOnChange,
  values,
  errors,
  setErrors,
  selectCard,
}) {
  const path = window.location.pathname.split("/").pop();
  const validation = () => {
    const newErrors = {};

    if (!values?.image) {
      newErrors.image = "Please enter an image";
    }

    if (selectCard === "PersonalThemeCard") {
      if (!values?.backgroundimage) {
        newErrors.backgroundimage = "Please enter an backgroundimage";
      }
    }

    if (!values?.name) {
      newErrors.name = "Please enter a name";
    }

    if (!values?.title) {
      newErrors.title = "Please enter a title";
    }

    if (
      selectCard === "PersonalDetailsCard" ||
      selectCard === "PersonalThemeCard" ||
      selectCard === "PersonalPreviewCard"
    ) {
      if (!values?.company) {
        newErrors.company = "Please enter a company name";
      }
    }

    if (
      selectCard === "PersonalPreviewCard" ||
      selectCard === "PersonalContactCard" ||
      path === "business_profile_design"
    ) {
      if (!values?.description) {
        newErrors.description = "Please enter a description";
      }
    }

    if (
      selectCard === "PersonalLinksCard" ||
      selectCard === "PersonalContactCard" ||
      selectCard === "PersonalBusinessCard"
    ) {
      if (!values?.fontcolor) {
        newErrors.fontcolor = "Please select a fontcolor";
      }
    }

    if (
      selectCard === "PersonalLinksCard" ||
      selectCard === "PersonalContactCard" ||
      selectCard === "PersonalBusinessCard"
    ) {
      if (!values?.backgroundcolor) {
        newErrors.backgroundcolor = "Please select a backgroundcolor";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      if (path === "business_profile_design") {
        setPage(2);
      } else {
        setPage(3);
      }
    }
  };
  console.log("value *******", values);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <form className="flex flex-col items-center w-full max-w-md">
        <p className="text-3xl font-semibold">Add Your Information</p>
        <div className="relative mt-10">
          {values?.image ? (
            <img
              className="inline-block h-32 w-32 rounded-full"
              src={URL.createObjectURL(values?.image)}
              alt="Profile"
            />
          ) : (
            <img
              className="inline-block h-32 w-32 rounded-full"
              src={avatar}
              alt="Profile"
            />
          )}
          <label
            className="absolute bottom-2 -right-2.5 rounded-full p-2"
            aria-label="Change Profile Picture"
          >
            <FontAwesomeIcon
              icon={faCamera}
              // className={values?.image ? "hidden" : "text-darkblue text-xl"}
              className="bg-white p-1 rounded-full text-xl"
            />
            <input
              className="hidden"
              id="image"
              type="file"
              accept="image/*"
              name="image"
              onChange={(e) => handleOnChange(e)}
            />
          </label>
          {errors?.image && (
            <p className="text-xs text-red-500">{errors?.image}</p>
          )}
        </div>

        {selectCard === "PersonalThemeCard" && (
          <div className="w-full mt-8">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
              id="image"
              type="file"
              accept="image/*"
              name="backgroundimage"
              onChange={(e) => handleOnChange(e)}
            />
            {errors?.backgroundimage && (
              <p className="text-xs text-red-500">{errors?.backgroundimage}</p>
            )}
          </div>
        )}

        <div className="w-full mt-5">
          <input
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
            id="inline-full-name"
            type="text"
            placeholder="Enter Name"
            name="name"
            value={values?.name}
            onChange={(e) => handleOnChange(e)}
          />
          {errors?.name && (
            <p className="text-xs text-red-500">{errors?.name}</p>
          )}
        </div>

        <div className="w-full mt-5">
          <input
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
            id="inline-full-title"
            type="text"
            placeholder="Enter Occupation"
            name="title"
            value={values?.title}
            onChange={(e) => handleOnChange(e)}
          />
          {errors?.title && (
            <p className="text-xs text-red-500">{errors?.title}</p>
          )}
        </div>

        {(selectCard === "PersonalDetailsCard" ||
          selectCard === "PersonalThemeCard" ||
          selectCard === "PersonalPreviewCard") && (
          <div className="w-full mt-5">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
              id="inline-full-title"
              type="text"
              placeholder="Enter company name"
              name="company"
              value={values?.company}
              onChange={(e) => handleOnChange(e)}
            />
            {errors?.company && (
              <p className="text-xs text-red-500">{errors?.company}</p>
            )}
          </div>
        )}

        {(selectCard === "PersonalPreviewCard" ||
          selectCard === "PersonalContactCard" ||
          path === "business_profile_design") && (
          <div className="w-full mt-5">
            <EditorProvider>
              <Editor
                name="description"
                value={values?.description}
                onChange={(e) => handleOnChange(e)}
                containerProps={{
                  style: {
                    resize: "vertical",
                    maxHeight: "7rem",
                    overflowY: "auto",
                  },
                }}
              >
                <Toolbar>
                  <BtnUndo />
                  <BtnRedo />
                  <BtnBold />
                  <BtnItalic />
                  <BtnUnderline />
                  <BtnBulletList />
                  <BtnNumberedList />
                  <BtnStrikeThrough />
                  <BtnLink />
                  <BtnClearFormatting />
                  <BtnStyles />
                </Toolbar>
              </Editor>
            </EditorProvider>
            {errors?.description && (
              <p className="text-xs text-red-500">{errors?.description}</p>
            )}
          </div>
        )}

        {(selectCard === "PersonalLinksCard" ||
          selectCard === "PersonalContactCard" ||
          selectCard === "PersonalBusinessCard") && (
          <div className="flex w-full mt-5">
            <div>
              <label className="font-semibold">Select BackgroundColor: </label>
              <input
                className="appearance-none border-2 border-gray-200 rounded w-1/3 h-14 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
                id="inline-full-title"
                type="color"
                placeholder="Enter color"
                name="backgroundcolor"
                value={values?.backgroundcolor}
                onChange={(e) => handleOnChange(e)}
              />
              {errors?.backgroundcolor && (
                <p className="text-xs text-red-500">
                  {errors?.backgroundcolor}
                </p>
              )}
            </div>
            <div>
              <label className="font-semibold">Select Font Color: </label>
              <input
                className="appearance-none border-2 border-gray-200 rounded w-1/2 h-14 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
                id="inline-full-title"
                type="color"
                placeholder="Enter color"
                name="fontcolor"
                value={values?.fontcolor}
                onChange={(e) => handleOnChange(e)}
              />
              {errors?.fontcolor && (
                <p className="text-xs text-red-500">{errors?.fontcolor}</p>
              )}
            </div>
          </div>
        )}

        <div className="flex sm:flex-row justify-between sm:space-x-4 w-full mt-10">
          <div className="flex items-center space-x-2">
            <FaArrowLeft className="text-darkblue text-sm" />
            <button
              className=" text-darkblue font-semibold text-xl"
              onClick={() => {
                if (selectCard === "PersonalPreviewCard") {
                  setPage(1);
                  setErrors("");
                } else {
                  setPage(0);
                  setErrors("");
                }
              }}
            >
              Back
            </button>
          </div>
          <button
            className="flex items-center bg-darkblue text-white font-semibold text-lg rounded-full py-1.5 px-8"
            type="submit"
            onClick={(e) => handleOnSubmit(e)}
          >
            Next <FaArrowRight className="ml-2 text-sm" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
