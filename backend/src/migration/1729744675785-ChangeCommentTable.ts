import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeCommentTable1729744675785 implements MigrationInterface {
    name = 'ChangeCommentTable1729744675785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Comment" ADD COLUMN "eventId" INTEGER`);
        await queryRunner.query(`ALTER TABLE "Comment" ADD COLUMN "userId" INTEGER`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Comment" DROP COLUMN "eventId"`);
        await queryRunner.query(`ALTER TABLE "Comment" DROP COLUMN "userId"`);
    }

}
