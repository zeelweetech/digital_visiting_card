import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

// Private Routing
export const PrivateAuthRoute = () => {
  const token = localStorage.getItem("token");

  return !token ? <Outlet /> : <Navigate to={"/dashboard"} />;
};

export const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to={"/"} />;
};

// Token Decode
export const decodedToken = () => {
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  return decoded;
};
