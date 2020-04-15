import {MigrationInterface, QueryRunner} from "typeorm";

export class TaskRefactoring1586949373971 implements MigrationInterface {
    name = 'TaskRefactoring1586949373971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "name" TO "title"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "title" TO "name"`, undefined);
    }

}
