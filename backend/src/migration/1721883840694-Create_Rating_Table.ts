import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRatingTable1721883840694 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "Rating" (
            "id" SERIAL NOT NULL,
            "userId" INTEGER,
            "eventId" INTEGER,
            "score" INTEGER NOT NULL,
            "createdDate" TIMESTAMP NOT NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE "Rating"
    `);
  }
}
