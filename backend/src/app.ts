import "reflect-metadata";
import express from "express";
import { connectToDatabase } from "./database/db";
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
import container from "./container";
import morgan from "morgan";

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


app.use(cookieParser());

app.use(express.json());

app.use(morgan("dev"));

app.use(scopePerRequest(container));

app.use((req, res, next) => {
  console.log("CORS headers set:", res.getHeaders());
  next();
});


// we handle the socket connection here
socketHandler(io);


app.use("/api", userRouters);
app.use("/auth", authRouter);
app.use("/comments", commentRouter);

connectToDatabase()
  .then(() => {
    httpServer.listen(port, () => {
      console.log(`Server is running on port: 8080`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
  });
