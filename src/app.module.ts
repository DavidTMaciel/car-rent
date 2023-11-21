import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule, CarsModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
