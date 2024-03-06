import { Injectable } from '@nestjs/common';

//This should be a real class/interface that represting the user entity
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId : 1,
            username: 'john',
            password: 'change'
        },
        {
            userId : 2,
            username: 'marie',
            password: 'guess'
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}