import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginResource } from './resources/login';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Register new user' })
    @ApiResponse({ status: 201 })
    signUp(@Body() createUserDto: CreateUserDto) {
        return this.authService.signUp(createUserDto);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Login user' })
    @ApiResponse({
        status: 200,
        type: LoginResource
    })
    async login(@Body() loginDto: LoginDto) {
        const accessToken = await this.authService.login(loginDto);

        return LoginResource.from(accessToken);
    }
}
