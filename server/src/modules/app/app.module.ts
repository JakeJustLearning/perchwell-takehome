import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from '../client/client.module';
import { typeORMConfig } from '../../db/typeOrm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...typeORMConfig,
      autoLoadEntities: true,
      // isGlobal: true,
    }),
    ClientModule,
  ],
})
export class AppModule {}
