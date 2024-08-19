import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCommentTable1721883793407 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "Comment" (
            "id" SERIAL NOT NULL,
            "userId" INTEGER,
            "eventId" INTEGER,
            "comment" TEXT NOT NULL,
            "commentDate" TIMESTAMP NOT NULL,
            CONSTRAINT "PK_Comment" PRIMARY KEY ("id"),
            CONSTRAINT "FK_Comment_User" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE,
            CONSTRAINT "FK_Comment_Event" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE "Comment"
  `);
  }
}
