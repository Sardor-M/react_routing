import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
