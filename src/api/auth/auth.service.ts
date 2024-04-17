import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async login(loginDto: LoginDto) {
        const user = await this.usersService.findOne(loginDto.email)
            .catch(() => { throw new UnauthorizedException() });

        const passwordsMatched = await bcrypt.compare(loginDto.password, user.password);
        if (!passwordsMatched) {
            throw new UnauthorizedException();
        }

        const payload = { userId: user.id };
        return { accessToken: this.jwtService.sign(payload) };
    }
}
