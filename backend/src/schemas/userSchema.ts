import { z } from "zod";

// this schema is used to validate the incoming data from the user
export const userRegistrationSchema = z
  .object({
    username: z.string().min(6, "Username must be at least 6 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least a 8 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password did not match",
    path: ["confirmPassword"],
  });

export type UserSchema = z.infer<typeof userSchema>;

export const userSchema = z.object({
  username: z.string().min(6, "Username must be at least 6 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least a 8 characters long"),
});
