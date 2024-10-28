import "reflect-metadata";
import express from "express";
import { connectToDatabase, dataSource } from "./database/db";
import cors from "cors";
import morgan from "morgan";
import userRouters from "./api/routes/events.routes";
import authRouter from "./api/routes/auth.routes";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import { socketHandler } from "./sockets/socketHandler";
import commentRouter from "./api/routes/comment.routes";
import { CommentRepository } from "./repositories/CommentRepository";
import { scopePerRequest } from "awilix-express";
import container from "./container";

const app = express();
const port = 8080;

dotenv.config();

app.use(scopePerRequest(container));
// app.use(morgan("dev"));


const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
})

// cors middleware setup
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));


// we handle the socket connection here
socketHandler(io);

app.use(cookieParser());

app.use(express.json());

app.use((req, res, next) => {
  console.log("CORS headers set:", res.getHeaders());
  next();
});

// typeormUseContainer(Container);
useContainer(Container);


connectToDatabase()
  .then(() => {

    Container.set('DataSource', dataSource);

    Container.set(CommentRepository, Container.get(CommentRepository));

    app.use("/api", userRouters);
    app.use("/auth", authRouter);
    app.use("/comments", commentRouter);

    httpServer.listen(port, () => {
      console.log(`Server is running on port: 8080`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
  });
