import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { Repository } from 'typeorm';
import { RegisteUserDto } from './dto/register-user.dto';

interface Message {
  message: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async register(registerUserInput: RegisteUserDto): Promise<Message> {
    const user = this.userRepository.create(registerUserInput);

    if (!user)
      return {
        message: 'User not created',
      };

    this.userRepository.save(user);

    return {
      message: 'User created successfuly',
    };
  }

  async findOne(username: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        username,
      },
    });
  }
}
