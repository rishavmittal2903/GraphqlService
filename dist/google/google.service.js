"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let GoogleService = class GoogleService {
    async getNewAccessToken(refreshToken) {
        try {
            const response = await axios_1.default.post('https://accounts.google.com/o/oauth2/token');
            return response.data.access_token;
        }
        catch (error) {
            throw new Error('Failed to refresh the access token.');
        }
    }
    async getProfile(token) {
        try {
            return axios_1.default.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`);
        }
        catch (error) {
            console.error('Failed to revoke the token:', error);
        }
    }
    async isTokenExpired(token) {
        try {
            const response = await axios_1.default.get(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`);
            const expiresIn = response.data.expires_in;
            if (!expiresIn || expiresIn <= 0) {
                return true;
            }
        }
        catch (error) {
            return true;
        }
    }
    async revokeGoogleToken(token) {
        try {
            await axios_1.default.get(`https://accounts.google.com/o/oauth2/revoke?token=${token}`);
        }
        catch (error) {
            console.error('Failed to revoke the token:', error);
        }
    }
};
exports.GoogleService = GoogleService;
exports.GoogleService = GoogleService = __decorate([
    (0, common_1.Injectable)()
], GoogleService);
//# sourceMappingURL=google.service.js.map