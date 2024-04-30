// import "reflect-metadata";
import { DataSource } from "typeorm";
import dataSourceOptions from "../config/db.config";

export const dataSource = new DataSource(dataSourceOptions);

export const connectToDatabase = async () => {
  try {
    await dataSource.initialize();
    console.log("DB is connected");
  } catch (error) {
    console.error("DB connection is failed:", error);
    process.exit(1);
  }
};
