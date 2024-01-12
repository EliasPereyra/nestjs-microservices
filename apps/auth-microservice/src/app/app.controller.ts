import { Controller, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@nestjs-microservices/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    this.appService.createUser(data);
  }
}
