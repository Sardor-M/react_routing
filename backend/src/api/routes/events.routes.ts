import express from "express";
import * as RunnerController from "../controllers/events.controller";

const router = express.Router();

router.get("/runners", RunnerController.getAllRunners);
router.post("/runners/filtered", RunnerController.getFilteredEvent);
router.get("/runner/:id", RunnerController.getRunnerById);
router.get("/events/upcoming", RunnerController.getUpcomingRunningEvents);
router.get(
  "/events/upcoming/:id",
  RunnerController.getUpcomingRunningEventsById
);

export default router;
