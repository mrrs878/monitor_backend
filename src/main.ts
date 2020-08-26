import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import AppModule from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  app.setGlobalPrefix('/api');
  app.enableCors();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  await app.listen(3000);
}
bootstrap().catch((e) => console.log(e));
