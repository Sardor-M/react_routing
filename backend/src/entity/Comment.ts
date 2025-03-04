import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Event } from "./Event";

@Entity("Comment")
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @Column()
  eventId!: number;

  @Column()
  userId!: number;
  
  // here we associate the coment with the Post or the Event
  @ManyToOne(() => User, (user) => user.comments)
  user!: User;

  @ManyToOne(() => Event, (event) => event.comments)
  event!: Event;
}
