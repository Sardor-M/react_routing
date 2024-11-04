import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeCommentTableColumn1730724867071 implements MigrationInterface {
    name = 'ChangeCommentTableColumn1730724867071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Comment" DROP COLUMN "createdDate"`);
        await queryRunner.query(`ALTER TABLE "Comment" ADD "createdDate" TIMESTAMP DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Comment" DROP COLUMN "createdDate"`);
        await queryRunner.query(`ALTER TABLE "Comment" ADD "createdDate" TIMESTAMP`);
    }
}