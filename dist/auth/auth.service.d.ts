import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { AuthDto } from 'src/dto/auth.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<any>;
    signIn(data: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: string): Promise<void>;
    refreshTokens(userId: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    hashData(data: string): Promise<string>;
    updateRefreshToken(userId: string, refreshToken: string): Promise<void>;
    getTokens(userId: string, username: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
