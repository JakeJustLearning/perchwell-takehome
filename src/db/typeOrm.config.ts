import { join } from 'path';
import { DataSourceOptions } from 'typeorm';

export const typeORMConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'perchwell',
  password: 'perchwell',
  database: 'perchwell',
  migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
};
