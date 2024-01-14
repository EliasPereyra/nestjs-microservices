import { MakePaymentDTO } from '@nestjs-microservices/shared';
import { User } from '@nestjs-microservices/shared/entities';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka
  ) {}

  processPayment(makePaymentDto: MakePaymentDTO) {
    const { amount, userId } = makePaymentDto;

    console.info('process payment');

    this.authClient
      .send('get_user', JSON.stringify({ userId }))
      .subscribe((user: User) => {
        console.log(
          `process payment for user ${user.name} - amount: ${amount}`
        );
      });
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
