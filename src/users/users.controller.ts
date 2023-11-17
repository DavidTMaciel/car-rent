import {
  Controller
  , Get
  , Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User as Usermodel } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('create-user')
  async create(@Body() userData: { name: string, password: string, address: string, email: string }): Promise<Usermodel> {
    return this.usersService.createUser(userData);
  }

  @Get('list-users')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('list-user/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch('update-user/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<Usermodel> {
    return this.usersService.update({
      where: { id: Number(id) }, data: updateUserDto
    });
  }

  @Delete('delete-user/:id')
  remove(@Param('id') id: string):Promise<Usermodel> {
    return this.usersService.deleteUser({
      id:Number(id)
    });
  }
}
