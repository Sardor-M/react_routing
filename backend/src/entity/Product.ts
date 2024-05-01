import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("float")
  price!: number;

  @Column({ type: "text" })
  description!: string;

  @Column()
  imageUrl!: string;

  @Column()
  type!: string;

  @Column()
  upcomingEventId!: string;
}
