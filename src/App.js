import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PrivateAuthRoute, PrivateRoute } from "./utils";
import Login from "./pages/login";
import Home from "./components/homePage.js";
import BusinessLayOut from "./layout/businessLayout.js";
import BusinessCardPreview from "./components/businessCardPreview.js";
import PersonalCardPreview from "./components/PersonalCardPreview.js";

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          {/* <Route element={<PrivateAuthRoute />}> */}
          <Route path="/" element={<Login />} />
          {/* </Route> */}
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/home_page" element={<Home />} />
          <Route path="/business_profile_design" element={<BusinessLayOut />} />
          <Route path="/personal_profile_design" element={<PersonalLayOut />} />
          <Route
            path="/business_digital_card/:name/:id"
            element={<BusinessCardPreview />}
          />
          <Route
            path="/personal_digital_card/:name/:id"
            element={<PersonalCardPreview />}
          />
          <Route path="/business_theme_design" element={<BusinessThemeDesign/>} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
