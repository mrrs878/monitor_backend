import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import MAIN_CONFIG from '../config';

@Module({
  imports: [
    MongooseModule.forRoot(MAIN_CONFIG.db),
  ],
})
export default class DB {}
