import { DataSource, DataSourceOptions } from "typeorm";
import { Runner } from "../entity/Runner";
import { User } from "../entity/User";
import { z } from "zod";

export const config: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5454,
  username: "steve",
  password: "12345",
  database: "run_with_us",
  logging: true,
  // entities: ["./src/entity/*/.ts"],
  entities: [Runner, User],
  synchronize: false,
  migrations: ["src/migration/**/*.ts"],
  // migrationsTableName: "Creating_New_Runners_Table",
};

export const dataSource = new DataSource(config);

export const connectToDatabase = async () => {
  try {
    await dataSource.initialize();
    console.log("DB is connected");
  } catch (error) {
    console.error("DB connection is failed:", error);
    process.exit(1);
  }
};

export const userSchema = z
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
