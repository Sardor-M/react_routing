import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRegistrationTable1721883771778
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "Registration" (
                "id" SERIAL NOT NULL,
                "userId" INTEGER,
                "eventId" INTEGER,
                "registrationDate" TIMESTAMP NOT NULL,
                CONSTRAINT "FK_EventRegistration_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE,
                CONSTRAINT "FK_EventRegistration_Event" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE
            )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE "EventRegistration"
    `);
  }
}
