import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from '@src/users/users.service';
import { Users } from '@src/users/entities/UsersEntity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<Users[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<Users | null> {
    return this.usersService.getUserById(id);
  }

  @Post()
  async createUser(
    @Body() createUserDto: { email: string; name: string },
  ): Promise<Users> {
    return this.usersService.createUser(
      createUserDto.email,
      createUserDto.name,
    );
  }
}
