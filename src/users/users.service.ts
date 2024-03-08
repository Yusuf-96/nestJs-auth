import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { Repository } from 'typeorm';
import { RegisteUserDto } from './dto/register-user.dto';
import * as bcrypt from 'bcrypt';

interface Message {
  message: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async register(registerUserInput: RegisteUserDto): Promise<Message> {
    const username = registerUserInput.username;

    const user = await this.userRepository.findOneBy({ username });

    if (user) {
      throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt();

    const password = await bcrypt.hash(registerUserInput.password, salt);

    const users = this.userRepository.create({
      ...registerUserInput,
      password,
    });

    this.userRepository.save(users);

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
