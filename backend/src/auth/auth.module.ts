import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {UsersModule} from "@src/users/users.module";
import {AuthController} from "@src/auth/auth.controller";
import {AuthService} from "@src/auth/auth.service";
import {GoogleAuthGuard} from "@src/auth/guards/google-auth.guard";
import {GoogleStrategy} from "@src/auth/strategies/google.strategy";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule,
        PassportModule.register({defaultStrategy: 'google'}),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: {expiresIn: '7d'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, GoogleStrategy, GoogleAuthGuard],
    exports: [AuthService],
})
export class AuthModule {
}
