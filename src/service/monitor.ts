import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Error } from '../models/Error';

@Injectable()
export default class MonitorService {
  constructor(@InjectModel(Error.name) private readonly userModel: Model<Error>) {}

  async report(error: string): Promise<Res<any>> {
    console.log(error);
    return { success: true, code: 0, msg: '', data: {} };
  }
}
