import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { IuserContext } from "../interfaces/user.interfaces";
import { IcontactsContext } from "../interfaces/contacts.interfaces";
import { ContactContext } from "../contexts/contactContext";

const useAuth: () => IuserContext = () => {
  const userContext = useContext(UserContext);

  return userContext;
};

const useContactAuth: () => IcontactsContext = () => {
  const contactContext = useContext(ContactContext);

  return contactContext;
};

export { useAuth, useContactAuth };
