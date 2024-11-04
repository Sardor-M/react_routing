import { Comment } from "../entity/Comment";
import { User } from "../entity/User";
import { CommentRepository } from '../repositories/CommentRepository';
import { Event } from "../entity/Event";

export class CommentService {

    private commentRepository: CommentRepository;

    // we set the CommentRepository as a dependency of the CommentService
    constructor({commentRepository} : {commentRepository: CommentRepository}) {
        if(!commentRepository) {
            throw new Error("commentRepository is undefined in CommentService constructor");
        }
        this.commentRepository = commentRepository;
    }

    async createComment(data: { content: string; userId: number; eventId: number }): Promise<Comment> {
        const comment = new Comment();
        comment.content = data.content;

        // setting the relations
        comment.user = {id: data.userId } as User;
        comment.event =  {id: data.eventId} as Event;
        // comment.user = { id: data.userId, events: [], registrations: [], comments: [], ratings: [] };

        return await this.commentRepository.saveCommentToDb(comment);
    }

    async getAllComments(): Promise<Comment[]> {
        return this.commentRepository.findAllComments(
           ["user", "event"], // we pass the relations  directly 
           { createdDate: "ASC" }
        );
    }
    async getCommentsByEventId(eventId: number): Promise<Comment[]> {
        return this.commentRepository.findCommentsByEventId(
            { event: { id: eventId } }, // we pass clause directly  
            ["user"], 
            { createdDate: "ASC" }
        );
    }
}
