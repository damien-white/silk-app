import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  getAllUsers() {
    return this.userRepository.find();
  }

  async getUserByName(username: string) {
    return this.userRepository.findOne({ username });
  }
}
