import React, { useState } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import ProfileContent from "../components/ProfileContent";
import PersonalCard from "../components/PersonalCard";
import PersonalPreviewColorDesign from "../components/PersonalCard/PersonalPreviewCard/PersonalPreviewColorDesign";
import PersonalPreviewCard from "../components/PersonalCard/PersonalPreviewCard";
import PersonalBusinessCard from "../components/PersonalCard/PersonalBusinessCard";
import PersonalContactCard from "../components/PersonalCard/PersonalContactCard";
import PersonalDetailsCrad from "../components/PersonalCard/PersonalDetailsCard";
import PersonalLinksCard from "../components/PersonalCard/PersonalLinksCard";
import PersonalThemeCard from "../components/PersonalCard/PersonalThemeCard";

function PersonalLayOut() {
  const [selectTheme, setSelectTheme] = useState();
  const [selectCard, setSelectCard] = useState();
  const [page, setPage] = useState(0);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

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
      {page === 0 && (
        <PersonalCard
          setSelectCard={setSelectCard}
          selectCard={selectCard}
          setPage={setPage}
        />
      )}
      <div className="flex mt-14">
        <div className="w-full md:w-1/2 overflow-y-auto">
          {selectCard === "PersonalPreviewCard" && page === 1 && (
            <PersonalPreviewColorDesign
              setSelectTheme={setSelectTheme}
              selectTheme={selectTheme}
              setPage={setPage}
            />
          )}

          {page === 2 && (
            <Profile
              setPage={setPage}
              handleOnChange={handleOnChange}
              values={values}
              errors={errors}
              setErrors={setErrors}
              selectCard={selectCard}
            />
          )}

          {page === 3 && (
            <ProfileContent
              setPage={setPage}
              handleOnChange={handleOnChange}
              values={values}
              errors={errors}
              setErrors={setErrors}
              selectTheme={selectTheme}
              selectCard={selectCard}
            />
          )}
        </div>
        {page !== 0 && (
          <div className="hidden md:block w-1/2">
            {selectCard === "PersonalBusinessCard" && (
              <PersonalBusinessCard values={values} />
            )}

            {selectCard === "PersonalContactCard" && <PersonalContactCard />}

            {selectCard === "PersonalDetailsCard" && <PersonalDetailsCrad />}

            {selectCard === "PersonalLinksCard" && <PersonalLinksCard />}

            {selectCard === "PersonalPreviewCard" && (
              <PersonalPreviewCard selectTheme={selectTheme} values={values} />
            )}

            {selectCard === "PersonalThemeCard" && <PersonalThemeCard />}
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalLayOut;
