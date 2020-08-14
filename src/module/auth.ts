import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import AuthController from '../controller/auth';
import AuthService from '../service/auth';
import { User, UserSchema } from '../schema/user';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService],
})
export default class Auth {}
