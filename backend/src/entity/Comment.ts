import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Event } from "./Event";

@Entity("Comment")
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @Column()
  createdData!: Date;
  @ManyToOne(() => User, (user) => user.comments)
  user!: User;

  @ManyToOne(() => Event, (event) => event.comments)
  event!: Event;
}
