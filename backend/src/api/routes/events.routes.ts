import express from "express";
import * as RunnerController from "../controllers/event/events.controller";
import { AuthMiddleware } from "../../middleware/auth.middleware";

const userRouters = express.Router();

// event routes
userRouters.get("/runners", RunnerController.getAllRunners);
userRouters.post("/runners/filtered", RunnerController.getFilteredEvent);
userRouters.get("/runner/:id", RunnerController.getRunnerById);
userRouters.get("/events/upcoming", RunnerController.getUpcomingRunningEvents);
userRouters.get(
  "/events/upcoming/:id",
  RunnerController.getUpcomingRunningEventsById
);

// protected route for event creating
userRouters.post(
  "/createEvent",
  AuthMiddleware,
  RunnerController.createAnEvents
);
userRouters.post(
  "/:id/register",
  AuthMiddleware,
  RunnerController.registerForEvent
);

export default userRouters;
