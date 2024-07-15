import express from "express";
import * as RunnerController from "../controllers/events.controller";

const userRouters = express.Router();

userRouters.get("/runners", RunnerController.getAllRunners);
userRouters.post("/runners/filtered", RunnerController.getFilteredEvent);
userRouters.get("/runner/:id", RunnerController.getRunnerById);
userRouters.get("/events/upcoming", RunnerController.getUpcomingRunningEvents);
userRouters.get(
  "/events/upcoming/:id",
  RunnerController.getUpcomingRunningEventsById
);

export default userRouters;
