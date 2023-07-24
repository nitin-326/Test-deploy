import { MigrationInterface, QueryRunner } from "typeorm";

export class First1689789414305 implements MigrationInterface {
    name = 'First1689789414305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Books" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "author" character varying NOT NULL, "description" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_45fc00b09d337eadf83e9240157" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Books" ADD CONSTRAINT "FK_2137fb92420db934da98839b111" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Books" DROP CONSTRAINT "FK_2137fb92420db934da98839b111"`);
        await queryRunner.query(`DROP TABLE "Books"`);
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
