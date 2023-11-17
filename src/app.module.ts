import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [UsersModule, CarsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
