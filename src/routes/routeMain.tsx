import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectRoutes";
import { Dashboard } from "../pages/Dashboard";
import { Seasson } from "../pages/Seasson";
import { Signup } from "../pages/signup";
import { PublicRoutes } from "./PublicRoutes";

const RouteMain = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/" element={<PublicRoutes />}>
        <Route path="/" element={<Seasson />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export { RouteMain };
