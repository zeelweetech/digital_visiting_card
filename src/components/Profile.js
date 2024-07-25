import React, { useState } from "react";
import profile from "../assets/image/profile.png";
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

function Profile({ setPage, handleOnChange, values, errors, setErrors }) {
  const validation = () => {
    const newErrors = {};

    if (!values?.image) {
      newErrors.image = "Please enter an image";
    }

    if (!values?.name) {
      newErrors.name = "Please enter a name";
    }

    // if (!values?.title) {
    //   newErrors.title = "Please enter a title";
    // }

    // if (!values?.company) {
    //   newErrors.company = "Please enter a company name";
    // }

    if (!values?.description) {
      newErrors.description = "Please enter a description";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      setPage(2);
    }
  };

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
              src={profile}
              alt="Profile"
            />
          )}
          <label
            className="absolute bottom-4 right-2 rounded-full p-2"
            aria-label="Change Profile Picture"
          >
            <FontAwesomeIcon
              icon={faCamera}
              // className={values?.image ? "hidden" : "text-darkblue text-xl"}
              className="text-darkblue text-xl"
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

        <div className="w-full mt-8">
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

        {/* <div className="w-full mt-5">
          <input
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
            id="inline-full-title"
            type="text"
            placeholder="Enter Title"
            name="title"
            value={values?.title}
            onChange={(e) => handleOnChange(e)}
          />
          {errors?.title && (
            <p className="text-xs text-red-500">{errors?.title}</p>
          )}
        </div> */}

        {/* <div className="w-full mt-5">
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
        </div> */}

        <div className="w-full mt-5">
          {/* <textarea
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-darkblue"
            rows="4"
            placeholder="Description"
            name="description"
            value={values?.description}
            onChange={(e) => handleOnChange(e)}
          ></textarea> */}
          <EditorProvider>
            <Editor
              name="description"
              value={values?.description}
              onChange={(e) => handleOnChange(e)}
              containerProps={{ style: { resize: "vertical" } }}
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

        <div className="flex sm:flex-row justify-between sm:space-x-4 w-full mt-10">
          <div className="flex items-center space-x-2">
            <FaArrowLeft className="text-darkblue text-sm" />
            <button
              className=" text-darkblue font-semibold text-xl"
              onClick={() => setPage(0)}
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
