import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeRatingTableRelation1723797330101
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "Rating"
        ADD CONSTRAINT "FK_Rating_User"  FOREIGN KEY ("userId")  REFERENCES "User"("id") ON DELETE CASCADE
    `);
    await queryRunner.query(`
         ALTER TABLE "Rating"
         ADD CONSTRAINT "FK_Rating_Event"  FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "Rating"
        DROP CONSTRAINT "FK_Rating_Event"
    `);
    await queryRunner.query(`
        ALTER TABLE "Rating"
        DROP CONSTRAINT "FK_Rating_User"
    `);
  }
}
