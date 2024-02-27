import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MakePaymentDTO {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
