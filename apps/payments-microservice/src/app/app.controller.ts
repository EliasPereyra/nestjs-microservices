import { Controller, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MakePaymentDTO } from '@nestjs-microservices/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('process_payment')
  handleProcessPayment(@Payload(ValidationPipe) data: MakePaymentDTO) {
    this.appService.processPayment(data);
  }
}
