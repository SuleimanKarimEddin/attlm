import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlaneDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsArray()
  @IsNotEmpty()
  options: string[];
}
