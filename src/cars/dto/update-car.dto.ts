import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
    model: string
    year: number
    air: boolean
    price: number
    amount: number
}
