"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./database/db");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const events_routes_1 = __importDefault(require("./api/routes/events.routes"));
const auth_routes_1 = __importDefault(require("./api/routes/auth.routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const port = 8080;
dotenv_1.default.config();
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
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
    app.use("/api", events_routes_1.default);
    app.use("/auth", auth_routes_1.default);
    app.listen(port, () => {
        console.log(`Server is running on port: 8080`);
    });
})
    .catch((error) => {
    console.error("Error connecting to the database: ", error);
});
