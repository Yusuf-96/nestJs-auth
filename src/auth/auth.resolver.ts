import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginRequestDto } from './dto/login-request.input';
import { LoginResponseDto } from './type/login-response.type';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { RegisteUserDto } from 'src/users/dto/register-user.dto';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private readonly usersSerivice: UsersService,
  ) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Mutation(() => String)
  async register(
    @Args('registerUserDto') registerUserDto: RegisteUserDto,
  ): Promise<string> {
    await this.usersSerivice.register(registerUserDto);
    return 'registered successfuly';
  }

  @Mutation(() => String)
  async login(
    @Args('loginRequestDto') loginRequestDto: LoginRequestDto,
  ): Promise<LoginResponseDto> {
    return this.authService.validateUser(
      loginRequestDto.username,
      loginRequestDto.password,
    );
  }
}
