import { Service } from "typedi";
import {Comment } from "../entity/Comment";
import { InjectRepository } from "typeorm-typedi-extensions";
import { CommentRepository } from "../repositories/CommentRepository";


@Service()
export class CommentService {
    constructor(
        @InjectRepository(CommentRepository)
        private readonly commentRepository: CommentRepository
    ) {}

    async saveCommentToDatabase(data: {content: string, userId: number}): Promise<Comment> {
        const comment = this.commentRepository.create({
            content: data.content,
            user: {id: data.userId}
        });

        return this.commentRepository.save(comment);
    }

    async getAllComments(): Promise<Comment[]> {
        return this.commentRepository.find({
            relations: ["user"],
            order: {createdData: "ASC"}
        })
    }
}
