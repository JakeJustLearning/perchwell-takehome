import { join } from 'path';
import { DataSourceOptions } from 'typeorm';

export const typeORMConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'perchwell',
  password: 'perchwell',
  database: 'perchwell',
  migrations: ['./migrations/*'],
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
};
