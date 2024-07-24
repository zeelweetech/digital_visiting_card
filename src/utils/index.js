import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

// Private Routing
export const PrivateAuthRoute = () => {
  const token = localStorage.getItem("token");

  return !token ? <Outlet /> : <Navigate to={"/profile"} />;
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

// only number enter
export const handleNumberKeyDown = (e) => {
  // Allow only numbers (0-9), backspace/delete key, and Ctrl/Cmd + C/V for copy/paste
  const isValidKey =
    /[0-9]|Backspace|Delete/.test(e.key) ||
    ((e.ctrlKey || e.metaKey) &&
      (e.key === "c" || e.key === "C" || e.key === "v" || e.key === "V"));

  if (!isValidKey) {
    e.preventDefault();
  }
};

export const NumberKeyDown = ({ children }) => {
  return <div onKeyDown={handleNumberKeyDown}>{children}</div>;
};
