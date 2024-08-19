import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeCommentTableRelation1723797726402
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` 
        ALTER TABLE "Comment"
        ADD CONSTRAINT "FK_Comment_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE
    `);
    await queryRunner.query(`
        ALTER TABLE "Comment"
        ADD CONSTRAINT "FK_Comment_Event" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "Comment"
        DROP CONSTRAINT "FK_Comment_Event"
    `);
    await queryRunner.query(`
        ALTER TABLE "Comment"
        DROP CONSTRAINT "FK_Comment_User"
    `);
  }
}
