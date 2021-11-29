import { Controller, Get } from '@nestjs/common';
import { User } from './models/User';

@Controller('users')
export class UsersController {
  @Get()
  getAll(): Array<User> {
    return [
      {
        username: 'user',
        password: 'password',
      },
      {
        username: 'admin',
        password: 'password',
      },
      {
        username: 'timur',
        password: 'password',
      },
    ];
  }
}
