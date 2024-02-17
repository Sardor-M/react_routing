import express from "express";
import bodyParser from "body-parser";
import runnerRouter from "./routes/runner.routes";

const app = express();
const PORT = 4000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", runnerRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
