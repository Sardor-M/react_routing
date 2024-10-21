import { Repository } from "typeorm";
import { Event } from "../entity/Event";
import { Comment } from "../entity/Comment";

export class CommentRepository extends Repository<Comment> {}
