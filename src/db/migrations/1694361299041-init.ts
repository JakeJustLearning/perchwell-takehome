import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1694361299041 implements MigrationInterface {
  name = 'Init1694361299041';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "vote" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" integer, CONSTRAINT "PK_2d5932d46afe39c8176f9d4be72" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "client" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "vote" ADD CONSTRAINT "FK_fda30edfdac85a557a3d2bda388" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );

    await queryRunner.query(`
      INSERT INTO "client" (
        name
      )
      VALUES
      ('john'),
      ('dave'),
      ('henry'),
      ('gerrick'),
      ('lisa'),
      ('donovan'),
      ('jimmy argyle'),
      ('lester corduroy'),
      ('Barron fancy pants'),
      ('cleeeeeem')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "vote" DROP CONSTRAINT "FK_fda30edfdac85a557a3d2bda388"`,
    );
    await queryRunner.query(`DROP TABLE "client"`);
    await queryRunner.query(`DROP TABLE "vote"`);
  }
}
