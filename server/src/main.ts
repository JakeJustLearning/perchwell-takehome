import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/client/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3030'],
  });
  await app.listen(3000);
}
bootstrap();
