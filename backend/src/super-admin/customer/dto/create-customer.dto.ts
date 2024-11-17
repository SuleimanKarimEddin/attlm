import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsNumber()
  planId: number;
  
  @IsString()
  password: string;
}
