"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const db_1 = require("./database/db");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const events_routes_1 = __importDefault(require("./api/routes/events.routes"));
const auth_routes_1 = __importDefault(require("./api/routes/auth.routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const socketHandler_1 = require("./sockets/socketHandler");
const comment_routes_1 = __importDefault(require("./api/routes/comment.routes"));
const CommentRepository_1 = require("./repositories/CommentRepository");
const typeorm_1 = require("typeorm");
const typedi_1 = __importDefault(require("typedi"));
// import { useContainer } from "typeorm-typedi-extensions";
const app = (0, express_1.default)();
const port = 8080;
dotenv_1.default.config();
app.use((0, morgan_1.default)("dev"));
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
// we handle the socket connection here
(0, socketHandler_1.socketHandler)(io);
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log("CORS headers set:", res.getHeaders());
    next();
});
// typeormUseContainer(Container);
(0, typeorm_1.useContainer)(typedi_1.default);
(0, db_1.connectToDatabase)()
    .then(() => {
    typedi_1.default.set('DataSource', db_1.dataSource);
    typedi_1.default.set(CommentRepository_1.CommentRepository, typedi_1.default.get(CommentRepository_1.CommentRepository));
    app.use("/api", events_routes_1.default);
    app.use("/auth", auth_routes_1.default);
    app.use("/comments", comment_routes_1.default);
    httpServer.listen(port, () => {
        console.log(`Server is running on port: 8080`);
    });
})
    .catch((error) => {
    console.error("Error connecting to the database: ", error);
});
