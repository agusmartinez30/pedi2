import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginAuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor( private readonly authService : AuthService){}

    @Post('/login')
    async login(@Body() user: loginAuthDto) {
        return await this.authService.login(user);
    }

    @Post('/login/admin')
    async loginAdmin(@Body() user: loginAuthDto) {
        return await this.authService.loginAdmin(user);
    }
}
