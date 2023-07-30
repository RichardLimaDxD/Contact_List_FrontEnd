import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = localStorage.getItem("@TOKEN");

  return user ? <Outlet /> : <Navigate to="/" />;
};

export { ProtectedRoutes };
