import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserTable1720770645531 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "User" (
            "id" SERIAL NOT NULL,
            "username" VARCHAR(20) NOT NULL, CHECK (char_length("username") >= 4),
            "email" VARCHAR(255) NOT NULL UNIQUE,
            "password" VARCHAR(100) CHECK (char_length("password") >= 6)
        )    
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE "User"
      `);
  }
}
