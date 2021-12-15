import { Controller, Get, Header, Response } from '@nestjs/common';
import { Response as Res } from 'express';
import { User } from '../models/User';

@Controller('users')
export class UsersController {
  @Get()
  getAll(): Array<User> {
    return [
      {
        username: 'user@user.com',
        password: 'password',
      },
      {
        username: 'admin@admin.com',
        password: 'password',
      },
      {
        username: 'timur@timur.com',
        password: 'password',
      },
    ];
  }
}
