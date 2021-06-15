import { Controller, Get, Logger, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    Logger.log('/user endpoint hit...');
    return this.userService.getAllUsers();
  }

  @Get(':name')
  getUserByName(@Param('name') name: string) {
    console.log(`This action returns a #${name} user`);
    return this.userService.getUserByName(name);
  }
}
