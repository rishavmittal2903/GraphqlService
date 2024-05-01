import { Request } from 'express';
import { AuthDto } from 'src/dto/auth.dto';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(createUserDto: CreateUserDto): Promise<any>;
    signin(data: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(req: Request): void;
    refreshTokens(req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
