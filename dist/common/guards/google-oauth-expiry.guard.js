"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckTokenExpiryGuard = void 0;
const common_1 = require("@nestjs/common");
const google_service_1 = require("../../google/google.service");
let CheckTokenExpiryGuard = class CheckTokenExpiryGuard {
    constructor(authService) {
        this.authService = authService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const accessToken = request.cookies['access_token'];
        if (await this.authService.isTokenExpired(accessToken)) {
            const refreshToken = request.cookies['refresh_token'];
            if (!refreshToken) {
                throw new common_1.UnauthorizedException('Refresh token not found');
            }
            try {
                const newAccessToken = await this.authService.getNewAccessToken(refreshToken);
                request.res.cookie('access_token', newAccessToken, {
                    httpOnly: true,
                });
                request.cookies['access_token'] = newAccessToken;
            }
            catch (error) {
                throw new common_1.UnauthorizedException('Failed to refresh token');
            }
        }
        return true;
    }
};
exports.CheckTokenExpiryGuard = CheckTokenExpiryGuard;
exports.CheckTokenExpiryGuard = CheckTokenExpiryGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [google_service_1.GoogleService])
], CheckTokenExpiryGuard);
//# sourceMappingURL=google-oauth-expiry.guard.js.map