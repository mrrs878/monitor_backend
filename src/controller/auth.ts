import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import AuthService from '../service/auth';
import { User } from '../models/user';

@Controller('/auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/user')
  getAllUsers() {
    return this.authService.findAll();
  }

  @Post('/login')
  login(@Req() request: Request) {
    console.log(request);
    return this.authService.login();
  }
}
