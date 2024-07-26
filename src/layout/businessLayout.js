import React, { useState } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import ProfileContent from "../components/ProfileContent";
import BusinessCardPreview from "../components/businessCardPreview";
import BusinessThemeDesign from "../components/businessThemeDesign";

function BusinessLayOut() {
  const [selectTheme, setSelectTheme] = useState();
  const [page, setPage] = useState(0);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  console.log("selectTheme", selectTheme);

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setValues({ ...values, [name]: files[0] });
      setErrors({ ...errors, [name]: "" });
    } else {
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <div>
      <Header />
      <div className="flex mt-14">
        <div className="w-full md:w-1/2 overflow-y-auto">
          {page === 0 ? (
            <BusinessThemeDesign
              setSelectTheme={setSelectTheme}
              selectTheme={selectTheme}
              setPage={setPage}
            />
          ) : page === 1 ? (
            <Profile
              setPage={setPage}
              handleOnChange={handleOnChange}
              values={values}
              errors={errors}
              setErrors={setErrors}
            />
          ) : page === 2 ? (
            <ProfileContent
              setPage={setPage}
              handleOnChange={handleOnChange}
              values={values}
              errors={errors}
              setErrors={setErrors}
              selectTheme={selectTheme}
            />
          ) : (
            ""
          )}
        </div>
        <div className="hidden md:block w-1/2">
          <BusinessCardPreview selectTheme={selectTheme} values={values} />
        </div>
      </div>
    </div>
  );
}

export default BusinessLayOut;
