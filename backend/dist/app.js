"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./database/db");
const runner_routes_1 = __importDefault(require("./api/routes/runner.routes"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = 8080;
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
app.use((req, res, next) => {
    console.log("CORS headers set:", res.getHeaders());
    next();
});
app.use(express_1.default.json());
(0, db_1.connectToDatabase)()
    .then(() => {
    app.use("/api", runner_routes_1.default);
    app.listen(port, () => {
        console.log(`Server is running on port: 8080`);
    });
})
    .catch((error) => {
    console.error("Error connecting to the database: ", error);
});
