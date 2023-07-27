import { createContext, useState } from "react";
import {
  TdefaultProps,
  Iseasson,
  Iusers,
  IuserContext,
} from "../interfaces/user.interfaces";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";

const UserContext = createContext({} as IuserContext);

const UserProvider = ({ children }: TdefaultProps) => {
  const [user, setUser] = useState<Iusers | null>(null);

  const navigate: NavigateFunction = useNavigate();

  const signup = async (formData: Iusers) => {
    try {
      const response = await api.post("/users", formData);

      setUser(response.data);

      toast.success(`Welcome! ${response.data.fullname}`);

      navigate("/");
    } catch (error) {
      toast.error("Please check your information and try again");
    }
  };

  const seasson = async (formData: Iseasson) => {
    try {
      const response = await api.post("/login", formData);

      const { token } = response.data;

      setUser(response.data);

      localStorage.setItem("@TOKEN", token);

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      navigate("/dashboard");

      toast.success(`Welcome back!`);
    } catch (error) {
      toast.error("Please check your information and try again");
    }
  };

  const deleteUser = async () => {
    try {
      const id = 1;
      await api.delete(`users/${id}`);

      localStorage.removeItem("@TOKEN");

      navigate("/");
    } catch (error) {
      toast.error("Please check your information and try again");
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
  };

  return (
    <UserContext.Provider
      value={{ signup, user, seasson, userLogout, deleteUser }}
    >
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
