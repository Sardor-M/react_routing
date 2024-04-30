"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./database/db");
const runner_routes_1 = __importDefault(require("./api/routes/runner.routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
(0, db_1.connectToDatabase)().then(() => {
    app.use("/api", runner_routes_1.default);
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
