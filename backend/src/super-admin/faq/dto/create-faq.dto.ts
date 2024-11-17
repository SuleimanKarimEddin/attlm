import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFAQDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsNotEmpty()
  answer: string;


  @IsNumber()
  @IsNotEmpty()
  customerId: number;
}
