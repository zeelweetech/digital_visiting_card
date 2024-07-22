import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import { PrivateAuthRoute, PrivateRoute } from "./utils";
import ThemeColor from "./components/ThemeColor";
import { Toaster } from "react-hot-toast";
import Profile from "./components/Profile";

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
          {/* </Route> */}
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
