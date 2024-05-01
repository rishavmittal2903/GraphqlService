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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const google_service_1 = require("./google.service");
const google_oauth_expiry_guard_1 = require("../common/guards/google-oauth-expiry.guard");
let GoogleController = class GoogleController {
    constructor(authService) {
        this.authService = authService;
    }
    googleLogin() { }
    googleLoginCallback(req, res) {
        const googleToken = req.user.accessToken;
        const googleRefreshToken = req.user.refreshToken;
        res.cookie('access_token', googleToken, { httpOnly: true });
        res.cookie('refresh_token', googleRefreshToken, {
            httpOnly: true,
        });
        res.redirect('http://localhost:3000/auth/profile');
    }
    async getProfile(req) {
        const accessToken = req.cookies['access_token'];
        if (accessToken)
            return (await this.authService.getProfile(accessToken)).data;
        throw new common_1.UnauthorizedException('No access token');
    }
    async logout(req, res) {
        const refreshToken = req.cookies['refresh_token'];
        res.clearCookie('access_token');
        res.clearCookie('refresh_token');
        this.authService.revokeGoogleToken(refreshToken);
        res.redirect('http://localhost:3000/');
    }
};
exports.GoogleController = GoogleController;
__decorate([
    (0, common_1.Get)('google'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleController.prototype, "googleLogin", null);
__decorate([
    (0, common_1.Get)('google-redirect'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GoogleController.prototype, "googleLoginCallback", null);
__decorate([
    (0, common_1.UseGuards)(google_oauth_expiry_guard_1.CheckTokenExpiryGuard),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GoogleController.prototype, "logout", null);
exports.GoogleController = GoogleController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('GoogleAuth'),
    __metadata("design:paramtypes", [google_service_1.GoogleService])
], GoogleController);
//# sourceMappingURL=google.controller.js.map