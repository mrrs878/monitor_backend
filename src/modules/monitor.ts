import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import MonitorController from 'src/controller/monitor';
import MonitorService from '../service/monitor';
import { Error, ErrorSchema } from '../models/Error';

@Module({
  imports: [MongooseModule.forFeature([{ name: Error.name, schema: ErrorSchema }])],
  controllers: [MonitorController],
  providers: [MonitorService],
})
export default class MonitorModule {}
