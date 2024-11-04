// src/app.ts
import "reflect-metadata";
import express from "express";
import { connectToDatabase, dataSource } from "./database/db";
import cors from "cors";
import userRouters from "./api/routes/events.routes";
import authRouter from "./api/routes/auth.routes";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import { socketHandler } from "./sockets/socketHandler";
import commentRouter from "./api/routes/comment.routes";
import { scopePerRequest } from "awilix-express";
import morgan from "morgan";
import container from "./container";
import { registerDataSourceDependencies } from "./container";

const app = express();
const port = 8080;

dotenv.config();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
});

// CORS middleware setup
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

// we ensure that the CORS headers are set
app.use((req, res, next) => {
  console.log("CORS headers set:", res.getHeaders());
  next();
});

connectToDatabase()
  .then(() => {
    console.log("DB is connected");

    registerDataSourceDependencies(dataSource);

    // Now that the container is fully set up, use scopePerRequest
    app.use(scopePerRequest(container));

    // Set up your routes
    app.use("/api", userRouters);
    app.use("/auth", authRouter);
    app.use("/api/comments", commentRouter);

    socketHandler(io, container);

    httpServer.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
  });
