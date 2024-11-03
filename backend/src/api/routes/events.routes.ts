import { Router } from "express";
import * as RunnerController from "../controllers/event/events.controller";
import { AuthMiddleware } from "../../middleware/auth.middleware";
import { makeInvoker } from "awilix-express";

const userRouters = Router();
const eventController = makeInvoker(RunnerController.EventController);

// event routes
userRouters.get("/runners", eventController("getAllRunners"));
userRouters.post("/runners/filtered", eventController("getFilteredEvent"));
userRouters.get("/runner/:id", eventController("getRunnerById"));
userRouters.get("/events/upcoming", eventController("getUpcomingRunningEvents"));
userRouters.get(
  "/events/upcoming/:id",
  eventController("getUpcomingRunningEventsById")
);

// protected route for event creating
userRouters.post(
  "/createEvent",
  AuthMiddleware,
  eventController("createAnEvents")
);

// protected route for event registration
userRouters.post(
  "/register",
  AuthMiddleware,
  eventController("registerForEvent")
)

userRouters.post(
  "/:id/register",
  AuthMiddleware,
  eventController("registerForEvent")
)

export default userRouters;
