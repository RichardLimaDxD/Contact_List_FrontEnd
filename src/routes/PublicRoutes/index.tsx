import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const token = localStorage.getItem("");

  return !token ? <Outlet /> : <Navigate to="/dashboard" />;
};

export { PublicRoutes };
