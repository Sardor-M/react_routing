"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const Runner_1 = require("../entity/Runner");
exports.config = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_USERNAME) || 5454,
    username: process.env.USR_NAME || "steve",
    password: process.env.PWD || "12345",
    database: process.env.DB_NAME || "run_with_us",
    // entities: ["./src/entity/*/.ts"],
    entities: [Runner_1.Runner],
    synchronize: false,
};
exports.default = exports.config;
