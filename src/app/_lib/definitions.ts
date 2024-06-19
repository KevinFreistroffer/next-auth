import { z } from "zod";

export const UserSchema = z
  .object({
    name: z.string().min(1, "Name is required."),
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters."),
  })
  .required();
