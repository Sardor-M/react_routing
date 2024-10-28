import { Response } from 'express';
import { CommentService } from '../../../services/CommentService';
import { UserRequestInfo } from '../../../types/userRequest';


export class CommentController {
  private commentService: CommentService;

  constructor({ commentService }: { commentService: CommentService }) {
    this.commentService = commentService;
  }

  async getCommentsByEventId(req: UserRequestInfo, res: Response) {
    try {
      const eventId = parseInt(req.params.eventId);
      const comments = await this.commentService.getCommentsByEventId(eventId);
      res.json(comments);
    } catch (error) {
      console.error('Error getting comments:', error);
      res.status(500).json({ message: 'Failed to get comments' });
    }
  }

  async createComment(req: UserRequestInfo, res: Response) {
    try {
      const { content, userId, eventId } = req.body;
      const savedComment = await this.commentService.createComment({ content, userId, eventId });
      res.json(savedComment);
    } catch (error) {
      console.error('Error saving comment:', error);
      res.status(500).json({ message: 'Failed to save comment' });
    }
  }
}
