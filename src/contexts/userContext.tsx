import { createContext, useState } from "react";
import {
  TdefaultProps,
  Iseasson,
  Iusers,
  IuserContext,
} from "../interfaces/user.interfaces";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";

const UserContext = createContext({} as IuserContext);

const UserService = ({ children }: TdefaultProps) => {
  const [user, setUser] = useState<Iusers | null>(null);

  const navigate: NavigateFunction = useNavigate();

  const signup = async (formData: Iusers) => {
    try {
      const response = await axios.post("/users", formData);

      setUser(response.data);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const seasson = async (formdata: Iseasson) => {
    try {
      const response = await axios.post("/login", formdata);

      setUser(response.data);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ signup, user, seasson }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserService };
