import express from "express";
import { connectToDatabase } from "./database/db";
import cors from "cors";
import morgan from "morgan";
import userRouters from "./api/routes/events.routes";
import authRouter from "./api/routes/auth.routes";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();
const port = 8080;

dotenv.config();

app.use(morgan("dev"));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log("CORS headers set:", res.getHeaders());
  next();
});

app.use(express.json());

connectToDatabase()
  .then(() => {
    app.use("/api", userRouters);
    app.use("/auth", authRouter);

    app.listen(port, () => {
      console.log(`Server is running on port: 8080`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
  });
