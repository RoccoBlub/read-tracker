import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {AuthService} from "@src/auth/auth.service";
import {GoogleAuthGuard} from "@src/auth/guards/google-auth.guard";
import {JwtAuthGuard} from "@src/auth/guards/jwt-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Get('google')
    @UseGuards(GoogleAuthGuard)
    async googleLogin() {
        // Redirects to Google Login
    }


    @Post('google/callback') // ✅ Use POST to receive `code`
    async googleAuthRedirect(@Body('code') code: string) {
        return this.authService.exchangeCodeForToken(code);
    }

    @Get('me')
    @UseGuards(JwtAuthGuard)
    async getUser(@Req() req) {
        return req.user;
    }
}
