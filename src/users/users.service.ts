import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';


@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService){}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  createUser(data: Prisma.UserCreateInput):Promise<User> {
    return this.prisma.user.create({
      data,
    })
  }

  findAll() {
    return this.prisma.user.findMany({
      select:{
        name: true,
        address: true,
        email: true,
      } 
    })
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where:{id:id}, select:{
        id:true,
        name: true,
        address: true,
        email: true,
      }
    })
  }

  update(params:{where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput}):Promise<User> {
    const {where, data} = params;
    return this.prisma.user.update({
      where, data
    })
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput):Promise<User> {

    return this.prisma.user.delete({
      where,
    })
  }
}
