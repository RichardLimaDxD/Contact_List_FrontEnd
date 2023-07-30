import { ReactNode } from "react";

interface TdefaultProps {
  children: ReactNode;
}

interface Iusers {
  id?: number;
  fullname: string;
  telephone: string;
  password: string;
  email: string;
}

interface Iseasson {
  email: string;
  password: string;
}

interface IuserContext {
  user: Iusers | null;
  signup: (formData: Iusers) => Promise<void>;
  seasson: (formdata: Iseasson) => Promise<void>;
  userLogout: () => void;
  deleteUser: () => Promise<void>;
  patchProfile: (formData: Iusers) => Promise<void>;
  userModal: boolean;
  setUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { TdefaultProps, Iusers, Iseasson, IuserContext };
