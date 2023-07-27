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

      setUser(response.data);

      localStorage.setItem("@TOKEN", response.data.token);

      navigate("/dashboard");

      toast.success(`Welcome back!`);
    } catch (error) {
      toast.error("Please check your information and try again");
    }
  };

  return (
    <UserContext.Provider value={{ signup, user, seasson }}>
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
