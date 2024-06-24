import { DataSource, DataSourceOptions } from "typeorm";
import { Runner } from "../entity/Runner";

export const config: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5454,
  username: "steve",
  password: "12345",
  database: "run_with_us",
  logging: true,

  // entities: ["./src/entity/*/.ts"],
  entities: [Runner],
  synchronize: false,
  migrations: ["src/migration/**/*.ts"],
  migrationsTableName: "Creating_New_Runners_Table",
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
