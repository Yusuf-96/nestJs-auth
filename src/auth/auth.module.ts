import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthResolver } from './auth.resolver';

@Module({
  imports:[UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy, AuthResolver]
})
export class AuthModule {}
