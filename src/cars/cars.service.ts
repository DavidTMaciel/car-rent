import { Injectable } from '@nestjs/common';
import { Prisma, Car } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarsService {

  constructor(private prisma: PrismaService) { }

  async car(
    CarWhereUniqueInput: Prisma.CarWhereUniqueInput,
  ): Promise<Car | null> {
    return this.prisma.car.findUnique({
      where: CarWhereUniqueInput
    })
  };

  createCar(data: Prisma.CarCreateInput): Promise<Car> {
    return this.prisma.car.create({
      data,
    })
  };

  findAllCars() {
    return this.prisma.car.findMany({

    })
  }

  findOneCar(where: Prisma.CarWhereUniqueInput){
    return this.prisma.car.findUnique({
      where, select:{
        model:true,
        year:true,
        userId:true,
        user:{
          select:{
            name:true,
            email:true,
            address:true
          }
        }
      }
    })
  }

  updateCar(params: { where: Prisma.CarWhereUniqueInput, data: Prisma.CarUpdateInput })
  {
    const { where, data } = params;
    if(!data.user){
      return ("User invalid")
    }
    return this.prisma.car.update({
      where, data
    })
  }

  removeCar(where: Prisma.CarWhereUniqueInput): Promise<Car> {
    return this.prisma.car.delete({
      where,
    })
  }

}
