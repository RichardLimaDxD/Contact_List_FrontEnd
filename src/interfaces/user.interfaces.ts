import { ReactNode } from "react";

interface TdefaultProps {
  children: ReactNode;
}

interface Iusers {
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
}

export type { TdefaultProps, Iusers, Iseasson, IuserContext };
