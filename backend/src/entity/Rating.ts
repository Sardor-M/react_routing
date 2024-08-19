import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Event } from "./Event";

@Entity("Rating")
export class Rating {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("int")
  score!: number;

  @Column()
  createdDate!: Date;

  @ManyToOne(() => User, (user) => user.ratings)
  user!: User;

  @ManyToOne(() => Event, (event) => event.ratings)
  event!: Event;
}


