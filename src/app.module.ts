import { Module } from '@nestjs/common';
import Auth from './modules/auth';
import ArticleModule from './modules/article';
import DB from './modules/db';

@Module({
  imports: [
    DB,
    Auth,
    ArticleModule,
  ],
})
export default class AppModule {}
