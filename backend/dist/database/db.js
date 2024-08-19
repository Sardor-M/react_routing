"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.dataSource = exports.config = void 0;
const typeorm_1 = require("typeorm");
exports.config = {
    type: "postgres",
    host: "localhost",
    port: 5454,
    username: "steve",
    password: "12345",
    database: "run_with_us",
    logging: true,
    // entities: ["./src/entity/*/.ts"],
    // entities: [Event, User],
    synchronize: false,
    migrations: ["src/migration/**/*.ts"],
    // migrationsTableName: "Creating_New_Runners_Table",
};
exports.dataSource = new typeorm_1.DataSource(exports.config);
const connectToDatabase = async () => {
    try {
        await exports.dataSource.initialize();
        console.log("DB is connected");
    }
    catch (error) {
        console.error("DB connection is failed:", error);
        process.exit(1);
    }
};
exports.connectToDatabase = connectToDatabase;
