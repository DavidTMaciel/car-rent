import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from 'src/users/users.module';
import { jwtConstants } from './auth/constantes';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[UsersModule,
  JwtModule.register({
    global:true,
    secret: jwtConstants.secret,
    signOptions:{expiresIn: '60s'}
  })],
  providers: [AuthService],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}
