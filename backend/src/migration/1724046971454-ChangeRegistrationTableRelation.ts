import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeRegistrationTableRelation1724046971454
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "EventRegistration"
        ADD CONSTRAINT "FK_EventRegistration_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE,
        ADD CONSTRAINT "FK_EventRegistration_Event" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "EventRegistration"
        DROP CONSTRAINT "FK_EventRegistration_Event"
        DROP CONSTRAINT "FK_EventRegistration_User"
    `);
  }
}
