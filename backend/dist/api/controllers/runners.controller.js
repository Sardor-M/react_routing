"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpcomingRunningEventsById = exports.getUpcomingRunningEvents = exports.getRunnerById = exports.getAllRunners = void 0;
const Runner_1 = require("../../entity/Runner");
const db_1 = require("../../database/db");
const ProductRepository_1 = require("../../repositories/ProductRepository");
async function getAllRunners(req, res) {
    try {
        const runnerRepository = (0, ProductRepository_1.getRepository)();
        const runners = await runnerRepository.find();
        console.log("Runners data in the response: ", runnerRepository, runners);
        if (!runners || runners.length === 0) {
            res
                .status(404)
                .json({ message: "No Runners found from the server is an error" });
            return;
        }
        res.json(runners);
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ message: "Error fetching runners from the database" });
    }
}
exports.getAllRunners = getAllRunners;
async function getRunnerById(req, res) {
    const id = (0, ProductRepository_1.getIdFromRequest)(req);
    const runnerRepository = db_1.dataSource.getRepository(Runner_1.Runner);
    const runner = await runnerRepository.findOne({ where: { id: id } });
    runner
        ? res.json(runner)
        : res.status(404).json({ message: "Runner not found" });
}
exports.getRunnerById = getRunnerById;
async function getUpcomingRunningEvents(req, res) {
    // Get the filter value from the query parameter
    const typeFilter = req.query.type;
    const runnerRepository = (0, ProductRepository_1.getRepository)();
    const runners = await runnerRepository.find();
    let upcomingEvents = runners.map(({ id, type, name, price, imageurl }) => {
        return {
            id,
            type,
            name,
            price,
            imageurl,
        };
    });
    if (typeFilter) {
        upcomingEvents = upcomingEvents.filter((event) => event.type === typeFilter);
    }
    res.json(upcomingEvents);
}
exports.getUpcomingRunningEvents = getUpcomingRunningEvents;
async function getUpcomingRunningEventsById(req, res) {
    const id = (0, ProductRepository_1.getIdFromRequest)(req);
    const runnerRepository = db_1.dataSource.getRepository(Runner_1.Runner);
    const runners = await runnerRepository.find();
    const upcomingRunningEventId = runners.find((r) => r.id === id);
    upcomingRunningEventId
        ? res.json(upcomingRunningEventId)
        : res.status(404).json({ message: "Runner not found" });
}
exports.getUpcomingRunningEventsById = getUpcomingRunningEventsById;
