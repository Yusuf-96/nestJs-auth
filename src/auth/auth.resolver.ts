import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginRequestDto } from './dto/login-request.input';
import { LoginResponseDto } from './type/login-response.type';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {

    constructor(private authService: AuthService){}

    @Query(()=>String)
    async hello(){
        return "hello"
    }


    @Mutation(()=>String)
    async login(@Args('loginRequestDto') loginRequestDto: LoginRequestDto): Promise<LoginResponseDto>{

        return this.authService.validateUser(loginRequestDto.username, loginRequestDto.password)
        
    }
}
