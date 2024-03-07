import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginToken } from './models/auth.models';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    TypeOrmModule.forFeature([LoginToken]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, AuthResolver, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
