import express from "express";
import { connectToDatabase } from "./database/db";
import router from "./api/routes/runner.routes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// app.use(cors);
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
