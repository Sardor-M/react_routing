import express from "express";
import { connectToDatabase } from "./database/db";
import router from "./api/routes/runner.routes";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = 8080;

app.use(morgan("dev"));

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
    app.use("/api", router);

    app.listen(port, () => {
      console.log(`Server is running on port: 8080`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
  });
