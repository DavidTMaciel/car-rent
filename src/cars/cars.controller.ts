import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car as CarModel } from '@prisma/client';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  @Post('create-car')
  async create(@Body() carData: { model: string, year: number, air: boolean, price: number, amount: number }): Promise<CarModel> {
    return this.carsService.createCar(
      carData
    );
  }

  @Get('list-cars')
  async findAll() {
    return this.carsService.findAllCars();
  }

  @Get('list-car/:id')
  async findOne(@Param('id') id: string) {
    return this.carsService.findOneCar({
      id: Number(id)
    });
  }

  @Patch('update-car/:id')
  async update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto)
  {
    return this.carsService.updateCar({
      where: { id: Number(id) }, data: updateCarDto
    });
  }

  @Delete('delete-car/:id')
  remove(@Param('id') id: string): Promise<CarModel> {
    return this.carsService.removeCar({
      id: Number(id)
    });
  }
}
