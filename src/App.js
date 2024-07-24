import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import { PrivateAuthRoute, PrivateRoute } from "./utils";
import ThemeColor from "./components/ThemeColor";
import { Toaster } from "react-hot-toast";
import Profile from "./components/Profile";
import Profile_content from "./components/Profile_content";
import Digital_Card from "./components/Digital_Card";
import Preview from "./components/Preview";
import Header from "./components/Header";
import ThemeDesign from "./components/ThemeDesign";
import ChooseThemeDesign from "./components/ChooseTheme/ChooseThemeDesign";

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
          <Route path="/theme_color" element={<ThemeColor />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/profile_content" element={<Profile_content/>} />
          <Route path="/digital_card" element={<Digital_Card/>} />

          <Route path="/preview" element={<Preview/>} />
          <Route path="/header" element={<Header/>} />
          <Route path="/theme_design" element={<ThemeDesign/>} />

          <Route path="/choosethemedesign" element={<ChooseThemeDesign/>}/>
          {/* </Route> */}
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
