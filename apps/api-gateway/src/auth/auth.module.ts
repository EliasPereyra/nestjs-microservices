import { Module } from '@nestjs/common';
import { Auth } from './auth';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "AUTH_MICROSERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "auth",
            brokers: ["localhost:9092"],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: "auth-consumer"
          }
        }
      }
    ])
  ],
  providers: [Auth, AuthService],
  controllers: [AuthController]
})
export class AuthModule {}