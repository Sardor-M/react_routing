import { DataSourceOptions } from "typeorm";
import { Runner } from "../entity/Runner";

export const config: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_USERNAME) || 5454,
  username: process.env.USR_NAME || "steve",
  password: process.env.PWD || "12345",
  database: process.env.DB_NAME || "run_with_us",

  // entities: ["./src/entity/*/.ts"],
  entities: [Runner],
  synchronize: false,
};

export default config;
