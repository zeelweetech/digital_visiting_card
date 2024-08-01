import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PrivateAuthRoute, PrivateRoute } from "./utils";
import Login from "./pages/login";
import Home from "./components/homePage.js";
import BusinessLayOut from "./layout/businessLayout.js";
import BusinessCardPreview from "./components/BusinessCard/businessCardPreview.js";
import PersonalLayOut from "./layout/personalLayout.js";
// import PersonalPreviewCard from "./components/PersonalCard/PersonalPreviewCard/index.js";
import PersonalContactCard from "./components/PersonalCard/PersonalContactCard/index.js";
import PersonalBusinessCard from "./components/PersonalCard/PersonalBusinessCard/index.js";
import PersonalDetailsCrad from "./components/PersonalCard/PersonalDetailsCard/index.js";
import PersonalLinksCard from "./components/PersonalCard/PersonalLinksCard/index.js";
import PersonalPreviewCard from "./components/PersonalCard/PersonalPreviewCard/index.js";
import PersonalThemeCard from "./components/PersonalCard/PersonalThemeCard/index.js";

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateAuthRoute />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home_page" element={<Home />} />
            <Route
              path="/business_profile_design"
              element={<BusinessLayOut />}
            />
            <Route
              path="/personal_profile_design"
              element={<PersonalLayOut />}
            />
            <Route
              path="/business_digital_card/:name/:id"
              element={<BusinessCardPreview />}
            />
            {/* <Route
              path="/personal_digital_card/:name/:id"
              element={<PersonalPreviewCard />}
            /> */}
            <Route
              path="/PersonalBusinessCard/:name/:id"
              element={<PersonalBusinessCard />}
            />
            <Route
              path="/PersonalContactCard/:name/:id"
              element={<PersonalContactCard />}
            />
            <Route
              path="/PersonalDetailsCard/:name/:id"
              element={<PersonalDetailsCrad />}
            />
            <Route
              path="/PersonalLinksCard/:name/:id"
              element={<PersonalLinksCard />}
            />
            <Route
              path="/PersonalPreviewCard/:name/:id"
              element={<PersonalPreviewCard />}
            />
            <Route
              path="/PersonalThemeCard/:name/:id"
              element={<PersonalThemeCard />}
            />

            <Route path="/PersonalContactCard" element={<PersonalContactCard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
