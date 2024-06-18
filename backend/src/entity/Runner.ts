import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("runner")
export class Runner {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("float")
  price!: number;

  @Column({ type: "text" })
  description!: string;

  @Column({ nullable: true })
  imageUrl!: string;

  @Column()
  type!: string;

  @Column({ nullable: true })
  upcomingEventId!: number;
}
