import { Response } from 'express';
import { GoogleService } from './google.service';
export declare class GoogleController {
    private readonly authService;
    constructor(authService: GoogleService);
    googleLogin(): void;
    googleLoginCallback(req: any, res: Response): void;
    getProfile(req: any): Promise<any>;
    logout(req: any, res: Response): Promise<void>;
}
