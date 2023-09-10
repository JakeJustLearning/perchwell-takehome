import { DataSource } from 'typeorm';
import { typeORMConfig } from './typeOrm.config';

export const AppDataSource = new DataSource(typeORMConfig);
