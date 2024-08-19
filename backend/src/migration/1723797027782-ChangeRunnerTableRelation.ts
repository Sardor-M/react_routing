import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeRunnerTableRelation1723797027782
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "Runner"
        ADD COLUMN IF NOT EXISTS "creatorId" INTEGER
    `);
    await queryRunner.query(`
        ALTER TABLE "Runner"
        ADD CONSTRAINT "FK_Event_User" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "Runner"
        DROP CONSTRAINT "FK_Event_User"
    `);

    await queryRunner.query(`
        ALTER TABLE "RUNNER"
        DROP COLUMN IF EXISTS "creatorId"
    `);
  }
}
