import { CanActivate, ExecutionContext } from '@nestjs/common';
import { GoogleService } from 'src/google/google.service';
export declare class CheckTokenExpiryGuard implements CanActivate {
    private readonly authService;
    constructor(authService: GoogleService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
