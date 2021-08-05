import {MigrationInterface, QueryRunner} from "typeorm";

export class STartDB1628189560471 implements MigrationInterface {
    name = 'STartDB1628189560471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company" ("id" SERIAL NOT NULL, "cnpj" character varying(14) NOT NULL, "socialReason" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "website" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "company"`);
    }

}
