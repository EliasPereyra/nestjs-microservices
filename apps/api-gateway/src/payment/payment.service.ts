import { MakePaymentDTO } from '@nestjs-microservices/shared';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientKafka
  ) {}

  makePayment(makePaymentDto: MakePaymentDTO) {
    this.paymentClient.emit('process_payment', JSON.stringify(makePaymentDto));
  }
}
