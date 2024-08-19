import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUserTableRelation1724046932097
  implements MigrationInterface
{
  //   public async up(queryRunner: QueryRunner): Promise<void> {
  //     await queryRunner.query(`
  //         ALTER TABLE "Runner"
  //         ADD CONSTRAINT "FK_Event_User" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE
  //     `);
  //     await queryRunner.query(`
  //         ALTER TABLE "EventRegistration"
  //         ADD CONSTRAINT "FK_EventRegistration_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE
  //     `);
  //     await queryRunner.query(`
  //         ALTER TABLE "Comment"
  //         ADD CONSTRAINT "FK_Comment_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE
  //     `);
  //     await queryRunner.query(`
  //         ALTER TABLE "Rating"
  //         ADD CONSTRAINT "FK_Rating_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE
  //     `);
  //   }
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'FK_Event_User') THEN
          ALTER TABLE "Runner"
          ADD CONSTRAINT "FK_Event_User" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

    await queryRunner.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'FK_EventRegistration_User') THEN
          ALTER TABLE "EventRegistration"
          ADD CONSTRAINT "FK_EventRegistration_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

    await queryRunner.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'FK_Comment_User') THEN
          ALTER TABLE "Comment"
          ADD CONSTRAINT "FK_Comment_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);

    await queryRunner.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'FK_Rating_User') THEN
          ALTER TABLE "Rating"
          ADD CONSTRAINT "FK_Rating_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE;
        END IF;
      END $$;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "Rating" 
        DROP CONSTRAINT IF EXISTS "FK_RATING_User"
    `);
    await queryRunner.query(`
        ALTER TABLE "Comment" 
        DROP CONSTRAINT IF EXISTS "FK_Comment_User"
    `);
    await queryRunner.query(`
        ALTER TABLE "EventRegistration" 
        DROP CONSTRAINT IF EXISTS "FK_EventRegistration_User"
    `);
    await queryRunner.query(`
        ALTER TABLE "Runner" 
        DROP CONSTRAINT IF EXISTS "FK_Event_User"
    `);
  }
}
