import express from "express";
import { CommentService } from "../../services/CommentService";
import { Container } from "typedi";
import { UserRequestInfo } from "../../types/userRequest";
import { Response } from "express";
import { CommentRepository } from "../../repositories/CommentRepository";


const commentRouter = express.Router();
const commentService = Container.get(CommentService);

commentRouter.get("/:eventId", async (req: UserRequestInfo, res:Response ) => {
    try {
        const eventId  =  parseInt(req.params.eventId);
        const comments = await commentService.getCommentsByEventId(eventId);
        res.json(comments);
    } catch(error) {
        res.status(500).json({message: "Failed to get comments"});
        console.error("Error getting comments: ", error);
    }
})

commentRouter.post("/", async (req: UserRequestInfo, res:Response ) => {
    try {
        const commentRepository = Container.get(CommentRepository);
        const comments = await commentRepository.find();
        res.json(comments);
    } catch(error) {
        res.status(500).json({message: "Failed to save comment"});
        console.error("Error saving comment: ", error);
    }
})

export default commentRouter;
