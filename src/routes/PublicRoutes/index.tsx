import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const user = localStorage.getItem("@TOKEN");

  return !user ? <Outlet /> : <Navigate to="/dashboard" />;
};

export { PublicRoutes };
