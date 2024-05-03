import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "Username must be atleast 3 charaters")
  .max(20, "Username cannot be more than 20 charaters");

export const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(7, { message: "Password must be greater than 6 characters long" }),
});

export const loginSchema = z.object({
  username: usernameValidation,
  password: z
    .string()
    .min(7, { message: "Password must be greater than 6 characters long" }),
});
