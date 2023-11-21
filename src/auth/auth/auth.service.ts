import { UsersService } from './../../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneName(email);
        if (user?.password !== pass) {
            throw new UnauthorizedException
        }
        const payload = { sub: user.id, name: user.name };

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
