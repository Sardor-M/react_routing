"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.dataSource = exports.config = void 0;
const typeorm_1 = require("typeorm");
const Runner_1 = require("../entity/Runner");
const User_1 = require("../entity/User");
const Comment_1 = require("../entity/Comment");
const EventRegistration_1 = require("../entity/EventRegistration");
const Event_1 = require("../entity/Event");
const Rating_1 = require("../entity/Rating");
exports.config = {
    type: "postgres",
    host: "localhost",
    port: 5454,
    username: "steve",
    password: "12345",
    database: "run_with_us",
    logging: true,
    // entities: ["./src/entity/*/.ts"],
    entities: [Runner_1.Runner, User_1.User, Comment_1.Comment, Event_1.Event, EventRegistration_1.EventRegistration, Rating_1.Rating],
    synchronize: false,
    migrations: ["src/migration/**/*.ts"],
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
