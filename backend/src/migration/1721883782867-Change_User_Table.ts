import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUserTable1721883782867 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "Event"
        ADD CONSTRAINT "FK_Event_User" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE
    `);
    await queryRunner.query(`
        ALTER TABLE "EventRegistation"
        ADD CONSTRAINT "FK_EventRegistation_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE
    `);
    await queryRunner.query(`
        ALTER TABLE "Comment"
        ADD CONSTRAINT "FK_Comment_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE
    `);
    await queryRunner.query(`
        ALTER TABLE "Rating"
        ADD CONSTRAINT "FK_RATING_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "Rating" DROP CONSTRAINT "FK_RATING_User"
    `);
    await queryRunner.query(`
        ALTER TABLE "Comment" DROP CONSTRAINT "FK_Comment_User"
    `);
    await queryRunner.query(`
        ALTER TABLE "EventRegistation" DROP CONSTRAINT "FK_EventRegistation_User"
    `);
    await queryRunner.query(`
        ALTER TABLE "Event" DROP CONSTRAINT "FK_Event_User"
    `);
  }
}
