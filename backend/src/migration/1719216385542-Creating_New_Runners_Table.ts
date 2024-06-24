import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatingNewRunnersTable1719216385542
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "products" RENAME TO "Runner";`);
    await queryRunner.query(
      `ALTER TABLE "Runner" RENAME COLUMN "name" TO "title";`
    );
    await queryRunner.query(
      `ALTER TABLE "Runner" RENAME COLUMN "imageurl" TO "imageUrl";`
    );
    await queryRunner.query(
      `ALTER TABLE "Runner" RENAME COLUMN "type" TO "category";`
    );
    await queryRunner.query(
      `ALTER TABLE "Runner" RENAME COLUMN "upcomingid" TO "upcomingEventId";`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Runner" RENAME TO "products";`);
    await queryRunner.query(
      `ALTER TABLE "products" RENAME COLUMN "title" TO "name";`
    );
    await queryRunner.query(
      `ALTER TABLE "products" RENAME COLUMN "imageUrl" TO "imageurl";`
    );
    await queryRunner.query(
      `ALTER TABLE "products" RENAME COLUMN "category" TO "type";`
    );
    await queryRunner.query(
      `ALTER TABLE "products" RENAME COLUMN "upcomingEventId" TO "upcomingid";`
    );
  }
}
