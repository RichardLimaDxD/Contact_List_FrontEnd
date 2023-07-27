import { z } from "zod";

const createUserSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is required!" })
    .max(60, { message: "Max length is 60 characters!" })
    .nonempty({ message: "Must be a valid email!" }),
  fullname: z
    .string()
    .min(1, { message: "Full name is required!" })
    .max(60, { message: "Max length is 60 characters!" })
    .nonempty({ message: "Full name is required!" }),
  telephone: z
    .string()
    .min(11, { message: "Must be 11 characters" })
    .max(11, { message: "Max length is 11 characters!" })
    .nonempty({ message: "Telephone is required!" }),
  password: z
    .string()
    .min(8, "Must be atleast 8 characters!")
    .max(120, { message: "Max length is 120 characters!" })
    .nonempty({ message: "Required!" }),
});

const seassonUserSchema = z.object({
  email: z.string().nonempty({ message: "Required!" }),
  password: z.string().nonempty({ message: "Required!" }),
});

export { createUserSchema, seassonUserSchema };
