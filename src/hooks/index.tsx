import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { IuserContext } from "../interfaces/user.interfaces";

const useAuth: () => IuserContext = () => {
  const userContext = useContext(UserContext);

  return userContext;
};

export { useAuth };
