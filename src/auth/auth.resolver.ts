import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginRequestDto } from './dto/login-request.input';
import { LoginResponseDto } from './dto/login-response.dto';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {

    constructor(private authService: AuthService){}


    @Mutation(()=>String)
    async login(@Args('loginRequestDto') loginRequestDto: LoginRequestDto): Promise<LoginResponseDto>{

        return this.authService.validateUser(loginRequestDto.username, loginRequestDto.password)
        
    }
}
