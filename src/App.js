import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import { PrivateAuthRoute, PrivateRoute } from "./utils";
import { Toaster } from "react-hot-toast";
import Profile from "./components/Profile";
import Preview from "./components/Preview";
import ProfileLayOut from "./layout";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile_design" element={<ProfileLayOut />} />
          <Route path="/digital_card/:name/:id" element={<Preview />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
