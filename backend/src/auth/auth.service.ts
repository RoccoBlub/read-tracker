import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from "@src/users/entities/UsersEntity";
import { UsersService } from "@src/users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(email: string, name: string, picture: string): Promise<Users> {
        let user = await this.usersService.findByEmail(email);
        if (!user) {
            user = await this.usersService.createUser(email, name, picture);
        }
        return user;
    }

    async exchangeCodeForToken(code: string): Promise<{ access_token: string }> {
        try {
            // ✅ Exchange `code` for Google access token using `fetch()`
            const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    code,
                    client_id: process.env.GOOGLE_CLIENT_ID,
                    client_secret: process.env.GOOGLE_CLIENT_SECRET,
                    redirect_uri: `${process.env.API_URL}/auth/callback`,
                    grant_type: 'authorization_code',
                }),
            });

            const tokenData = await tokenResponse.json();
            if (!tokenResponse.ok) throw new Error(tokenData.error || 'Failed to get access token');

            const accessToken = tokenData.access_token;

            // ✅ Fetch user profile from Google
            const profileResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const profileData = await profileResponse.json();
            if (!profileResponse.ok) throw new Error('Failed to get user profile');

            const { email, name, picture } = profileData;
            const user = await this.validateUser(email, name, picture);

            return {
                access_token: this.jwtService.sign({ email: user.email, sub: user.id }),
            };
        } catch (error) {
            console.error('Error exchanging code for token:', error);
            throw new Error('Failed to exchange code for token.');
        }
    }
}
