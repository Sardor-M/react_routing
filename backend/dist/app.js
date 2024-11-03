"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const db_1 = require("./database/db");
const cors_1 = __importDefault(require("cors"));
const events_routes_1 = __importDefault(require("./api/routes/events.routes"));
const auth_routes_1 = __importDefault(require("./api/routes/auth.routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const socketHandler_1 = require("./sockets/socketHandler");
const comment_routes_1 = __importDefault(require("./api/routes/comment.routes"));
const awilix_express_1 = require("awilix-express");
const container_1 = __importDefault(require("./container"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = 8080;
dotenv_1.default.config();
app.use((0, awilix_express_1.scopePerRequest)(container_1.default));
// app.use(morgan("dev"));
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    },
});
// cors middleware setup
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, awilix_express_1.scopePerRequest)(container_1.default));
app.use((req, res, next) => {
    console.log("CORS headers set:", res.getHeaders());
    next();
});
// we handle the socket connection here
(0, socketHandler_1.socketHandler)(io);
app.use("/api", events_routes_1.default);
app.use("/auth", auth_routes_1.default);
app.use("/comments", comment_routes_1.default);
(0, db_1.connectToDatabase)()
    .then(() => {
    httpServer.listen(port, () => {
        console.log(`Server is running on port: 8080`);
    });
})
    .catch((error) => {
    console.error("Error connecting to the database: ", error);
});
