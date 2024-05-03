import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be atleast 4 characters long" }),
  country: z.string({ message: "Please select a country" }),
  gender: z.enum(["male", "female"]),
});
