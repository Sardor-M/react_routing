import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { EventRegistration } from "./EventRegistration";
import { Comment } from "./Comment";
import { Rating } from "./Rating";

@Entity("Runner")
export class Runner {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column("float")
  price!: number;

  @Column({ type: "text" })
  description!: string;

  @Column({ nullable: true })
  imageUrl!: string;

  @Column()
  category!: string;

  @Column({ nullable: true })
  upcomingEventId!: number;

  @Column({ nullable: true })
  location!: string;

  @Column()
  date!: Date;

  @Column()
  month!: string;

  // @Column("float", { nullable: true })
  // latitude?: number;

  // @Column("float", { nullable: true })
  // longitude?: number;

  @ManyToOne(() => User, (user) => user.events)
  creator!: User;

  @OneToMany(() => EventRegistration, (registrations) => registrations.event)
  registrations!: EventRegistration[];

  @OneToMany(() => Comment, (comment) => comment.event)
  comments!: Comment[];

  @OneToMany(() => Rating, (rating) => rating.user)
  ratings!: Rating[];
}
