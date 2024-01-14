import { IsNotEmpty, IsNumber } from 'class-validator';

export class MakePaymentDTO {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
