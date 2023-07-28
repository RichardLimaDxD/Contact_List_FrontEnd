import { createContext, useEffect, useState } from "react";
import {
  TdefaultProps,
  Iseasson,
  Iusers,
  IuserContext,
} from "../interfaces/user.interfaces";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserContext = createContext({} as IuserContext);

const UserProvider = ({ children }: TdefaultProps) => {
  const [user, setUser] = useState<Iusers | null>(null);

  const navigate: NavigateFunction = useNavigate();

  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    const loadingUser = async () => {
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const response = await api.get("/users");
          localStorage.getItem("@serialUser");

          setUser(response.data.id);
        } catch (error) {
          console.log(error);
        }
      } else {
        navigate("/");
      }
    };
    loadingUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signup = async (formData: Iusers) => {
    try {
      const response = await api.post("/users", formData);

      setUser(response.data);

      toast.success(`Welcome! ${response.data.fullname}`);

      navigate("/");
    } catch (error) {
      toast.error("User already exists.Please check your information");
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

      await retrieveUser();

      toast.success(`Welcome back!`);
    } catch (error) {
      toast.error("Please check your information and try again");
    }
  };

  const retrieveUser = async () => {
    try {
      const response = await api.get("/users");

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      localStorage.setItem("@serialUser", response.data.id);

      setUser(response.data.id);
    } catch (error) {
      toast.error("Error!");
    }
  };

  const deleteUser = async () => {
    try {
      const id = localStorage.getItem("@serialUser");

      await api.delete(`users/${id}`);

      setUser(null);
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@serialUser");

      navigate("/");

      toast.success("User Deleted!");
    } catch (error) {
      toast.error("Please check your information and try again");
    }
  };

  const patchProfile = async (formData: Iusers) => {
    const id = localStorage.getItem("@serialUser");

    try {
      const response = await api.patch(`/contact/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@serialUser");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ signup, user, seasson, userLogout, deleteUser, patchProfile }}
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
