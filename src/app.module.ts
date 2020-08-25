import { Module } from '@nestjs/common';
import Auth from './modules/auth';
import ArticleModule from './modules/article';
import MonitorModule from './modules/monitor';
import DB from './modules/db';

@Module({
  imports: [
    DB,
    Auth,
    ArticleModule,
    MonitorModule,
  ],
})
export default class AppModule {}
