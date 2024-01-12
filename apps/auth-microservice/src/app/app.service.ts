import { CreateUserDto } from '@nestjs-microservices/shared';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from '@nestjs-microservices/shared/entities';

@Injectable()
export class AppService {
  constructor(private readonly userRepository: UserRepository) {}
  createUser(user: CreateUserDto) {
    this.userRepository.save(user);
  }

  getUser(id: number): User {
    return this.userRepository.findOne(id);
  }
}
