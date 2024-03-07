import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ){}

    
    async findOne(username: string): Promise<User> {
        return this.userRepository.findOne({where: {
            username 
          }});
          
    }
}
