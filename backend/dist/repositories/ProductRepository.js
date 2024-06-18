"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdFromRequest = exports.getRepository = void 0;
const db_1 = require("../database/db");
const Runner_1 = require("../entity/Runner");
function getRepository() {
    return db_1.dataSource.getRepository(Runner_1.Runner);
}
exports.getRepository = getRepository;
function getIdFromRequest(req) {
    return Number(req.params.id);
}
exports.getIdFromRequest = getIdFromRequest;
