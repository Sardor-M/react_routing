import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Length, IsEmail } from "class-validator";

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
}
