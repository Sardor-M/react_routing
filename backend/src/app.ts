import express from "express";
import { connectToDatabase } from "./database/db";
import router from "./api/routes/runner.routes";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

connectToDatabase().then(() => {
  app.use("/api", router);

  app.listen(port, () => {
    console.log(`Server is running on port: 8080`);
  });
});

// const app = express();
// const PORT = 4000;
// const cors = require("cors");

// app.use(cors());
// app.use(bodyParser.json());
// app.use("/api", runnerRouter);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
