import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginRequestDto } from './dto/login-request.input';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    const isMatch = await bcrypt.compare(pass, user.password);

    if (user && isMatch) {
      return user.username;
    }
    return null;
  }

  async login(loginRequestDto: LoginRequestDto) {
    const user = await this.usersService.findOne(loginRequestDto.username);
    const payload = { username: user.username, sub: user.userId };
    // const { password, ...result } = user;
    return {
      accessToken: this.jwtService.sign(payload),
      //   user: result,
    };
  }
}
