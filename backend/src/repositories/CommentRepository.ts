import { DataSource, Repository } from "typeorm";
import { Comment } from "../entity/Comment";

export class CommentRepository  {
    private commentRepository: Repository<Comment>;

    constructor({dataSource}: {dataSource: DataSource}) {
        if (!dataSource) {
            throw new Error("dataSource is undefined in CommentRepository constructor");
        }
        this.commentRepository = dataSource.getRepository(Comment);
    }

    async findAllComments(relations: string[], order: {createdDate: 'ASC' | 'DESC'}): Promise<Comment[]> {
        return this.commentRepository.find({relations, order})
    }

    async saveCommentToDb(comment: Comment): Promise<Comment> {
        return this.commentRepository.save(comment);
    }

    async findCommentsByEventId(where: {event: {id: number}}, relations: string[], order: {createdDate: 'ASC' | 'DESC'} ): Promise<Comment[]> {
        return this.commentRepository.find({where, relations, order});
    }

    async deleteComment(commentId: number): Promise<void> {
        await this.commentRepository.delete(commentId);
    }
}