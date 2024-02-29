import express from "express";
import * as RunnerController from "../controllers/runners.controller";

const router = express.Router();

router.get("/runners", RunnerController.getAllRunners);
router.get("/runners/:id", RunnerController.getRunnerById);
router.get("/events/upcoming", RunnerController.getUpcomingRunningEvents);
router.get(
  "/events/upcoming/:id",
  RunnerController.getUpcomingRunningEventsById
);

export default router;
