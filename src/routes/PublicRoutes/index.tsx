import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";

const PublicRoutes = () => {
  const { user } = useAuth();

  return !user ? <Outlet /> : <Navigate to="/dashboard" />;
};

export { PublicRoutes };
