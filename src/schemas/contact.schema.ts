import { z } from "zod";

const createContactSchema = z.object({
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
});

export { createContactSchema };
