"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const Runner_1 = require("../entity/Runner");
exports.config = {
    type: "postgres",
    host: "localhost",
    port: 5454,
    username: "steve",
    password: "12345",
    database: "run_with_us",
    logging: true,
    // entities: ["./src/entity/*/.ts"],
    entities: [Runner_1.Runner],
    synchronize: false,
    migrations: ["path/to/migration/**/*.ts"],
};
exports.default = exports.config;
