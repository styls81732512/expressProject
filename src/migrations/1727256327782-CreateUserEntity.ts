import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserEntity1727256327782 implements MigrationInterface {
  name = "CreateUserEntity1727256327782";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "account" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")); COMMENT ON COLUMN "user"."name" IS '名稱'; COMMENT ON COLUMN "user"."account" IS '帳號'; COMMENT ON COLUMN "user"."password" IS '密碼'; COMMENT ON COLUMN "user"."createdAt" IS '建立時間'; COMMENT ON COLUMN "user"."updatedAt" IS '更新時間'; COMMENT ON COLUMN "user"."deletedAt" IS '刪除時間'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
