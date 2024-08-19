import {
  Column,
  Entity,
  IntegerType,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Event } from "./Event";

@Entity("EventRegistrations")
export class EventRegistration {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column()
  eventId!: number;

  @Column()
  registrationDate!: Date;

  @ManyToOne(() => User, (user) => user.registrations)
  user!: User;

  @ManyToOne(() => Event, (event) => event.registrations)
  event!: Event;
}
