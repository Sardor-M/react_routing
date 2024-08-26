import express from "express";
import * as RunnerController from "../controllers/event/events.controller";
import { UserController } from "../controllers/user/user.controller";
import { AuthMiddleware } from "../../middleware/auth.middleware";

const userRouters = express.Router();

// users routes
userRouters.post("/register", UserController.register);
userRouters.post("/login", UserController.login);
userRouters.post("/logout", UserController.logout);

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
  "/createAnEvent",
  AuthMiddleware,
  RunnerController.createAnEvents
);
userRouters.post(
  "/:id/register",
  AuthMiddleware,
  RunnerController.registerForEvent
);

export default userRouters;
