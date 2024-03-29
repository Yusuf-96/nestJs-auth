import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor( 
        private usersService:UsersService,
        private jwtService: JwtService
        ) {}



    async validateUser(username:string, pass: string): Promise<any>{
        const user = await this.usersService.findOne(username)

        const isMatch = await bcrypt.compare(pass, user.password);
        
        if (user && isMatch){
            // const {password, ...result} = user;
            return user.username
        }
        return null
    }

    async login(user:any){
        const payload = {username: user.username, sub: user.userId};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
