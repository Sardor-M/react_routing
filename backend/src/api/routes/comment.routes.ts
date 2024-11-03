import express from "express";
import { makeInvoker } from "awilix-express";
import {CommentController} from "../controllers/comment/comment.controller";

const commentRouter = express.Router();
const api = makeInvoker(CommentController);

commentRouter.get("/:eventId", api("getCommentsByEventId"));
commentRouter.post("/", api("createComment"));

export default commentRouter;
