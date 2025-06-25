import { z } from "zod";

export const contactFromSchema = z.object({
  name: z.string({ required_error: "Name is rquired" }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  message: z.string().optional(),
});
