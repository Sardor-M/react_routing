import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Length, IsEmail } from "class-validator";
import { Event } from "./Event";
import { EventRegistration } from "./EventRegistration";
import { Comment } from "./Comment";
import { Rating } from "./Rating";

@Entity("User")
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  @Length(4, 20)
  username?: string;

  @Column()
  @IsEmail()
  email?: string;

  @Column({ nullable: true })
  @Length(6, 100)
  password?: string;

  @OneToMany(() => Event, (event) => event.creator)
  events!: Event[];

  @OneToMany(() => EventRegistration, (registration) => registration.user)
  registrations!: EventRegistration[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments!: Comment[];

  @OneToMany(() => Rating, (rating) => rating.user)
  ratings!: Rating[];
}
