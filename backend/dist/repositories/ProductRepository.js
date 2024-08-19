"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdFromRequest = exports.getRepository = void 0;
const db_1 = require("../database/db");
const Event_1 = require("../entity/Event");
function getRepository() {
    return db_1.dataSource.getRepository(Event_1.Event);
}
exports.getRepository = getRepository;
function getIdFromRequest(req) {
    return Number(req.params.id);
}
exports.getIdFromRequest = getIdFromRequest;
