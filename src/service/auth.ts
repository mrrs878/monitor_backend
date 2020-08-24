import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user';

@Injectable()
export default class AuthService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async findAll(): Promise<Res<Array<User>>> {
    const data = await this.userModel.find().exec();
    return { success: true, code: 0, msg: '', data };
  }

  async login(): Promise<Res<any>> {
    return {
      success: true,
      code: 0,
      msg: '111',
      data: {},
    };
  }
}
