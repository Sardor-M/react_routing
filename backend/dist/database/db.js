"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.dataSource = void 0;
// import "reflect-metadata";
const typeorm_1 = require("typeorm");
const db_config_1 = __importDefault(require("../config/db.config"));
exports.dataSource = new typeorm_1.DataSource(db_config_1.default);
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
