"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const runner_routes_1 = __importDefault(require("./src/api/routes/runner.routes"));
const app = (0, express_1.default)();
const PORT = 4000;
const cors = require("cors");
app.use(cors());
app.use(body_parser_1.default.json());
app.use("/api", runner_routes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map