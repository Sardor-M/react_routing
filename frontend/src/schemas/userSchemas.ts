import { z } from "zod";

// this is used to validate the user input before sending it to the server
export const userSchema = z.object({
  username: z.string().min(6),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string(),
});

export type UserSchema = z.infer<typeof userSchema>;
