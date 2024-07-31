import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PrivateAuthRoute, PrivateRoute } from "./utils";
import Login from "./pages/login";
import Home from "./components/homePage.js";
import BusinessLayOut from "./layout/businessLayout.js";
import BusinessCardPreview from "./components/BusinessCard/businessCardPreview.js";
import PersonalLayOut from "./layout/personalLayout.js";
import BusinessThemeDesign from "./components/BusinessCard/businessThemeDesign.js";
import PersonalPreviewCard from "./components/PersonalCard/PersonalPreviewCard/index.js";
<<<<<<< HEAD
import PersonalContactCard from "./components/PersonalCard/PersonalContactCard/index.js";
=======
import PersonalLinksCard from "./components/PersonalCard/PersonalLinksCard/index.js";
import PersonalBusinessCard from "./components/PersonalCard/PersonalBusinessCard/index.js";
import PersonalThemeCard from "./components/PersonalCard/PersonalThemeCard/index.js";
>>>>>>> d517ed880acc024887b7d32c83cee0d796587939

function App() {
  const { id, name } = useParams();
  console.log("id***", id, name);
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
            <Route
              path="/personal_digital_card/:name/:id"
              element={<PersonalPreviewCard />}
            />
            <Route
              path="/PersonalBusinessCard/:name/:id"
              element={<PersonalBusinessCard />}
            />
            <Route path="/PersonalContactCard" element={<PersonalContactCard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
