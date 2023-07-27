import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("");

  return token ? <Outlet /> : <Navigate to="/" />;
};

export { ProtectedRoutes };
