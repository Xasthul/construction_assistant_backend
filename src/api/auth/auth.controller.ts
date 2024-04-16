import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private usersService: UsersService) { }

    @Post('signup')
    signUp(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }
}
