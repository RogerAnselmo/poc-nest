import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCompanyAdress1628189958772 implements MigrationInterface {
    name = 'CreateCompanyAdress1628189958772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company_address" ("id" SERIAL NOT NULL, "street" character varying(40) NOT NULL, "number" integer NOT NULL, "complement" character varying(40) NOT NULL, "district" character varying(20) NOT NULL, "cep" character varying(8) NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_1333bb935c62afe403dd22e5372" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."company" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."company" ADD CONSTRAINT "UQ_3737905699894299444476dd79c" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "public"."company" ADD CONSTRAINT "FK_3737905699894299444476dd79c" FOREIGN KEY ("addressId") REFERENCES "company_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."company" DROP CONSTRAINT "FK_3737905699894299444476dd79c"`);
        await queryRunner.query(`ALTER TABLE "public"."company" DROP CONSTRAINT "UQ_3737905699894299444476dd79c"`);
        await queryRunner.query(`ALTER TABLE "public"."company" DROP COLUMN "addressId"`);
        await queryRunner.query(`DROP TABLE "company_address"`);
    }

}
