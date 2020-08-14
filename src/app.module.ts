import { Module } from '@nestjs/common';
import Auth from './module/auth';
import DB from './module/db';

@Module({
  imports: [
    DB,
    Auth,
  ],
})
export default class AppModule {}
