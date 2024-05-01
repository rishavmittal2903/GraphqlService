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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const argon2 = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const contants_1 = require("./contants");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signUp(createUserDto) {
        const userExists = await this.usersService.findByUsername(createUserDto.username);
        if (userExists) {
            throw new common_1.BadRequestException('User already exists');
        }
        const hash = await this.hashData(createUserDto.password);
        const newUser = await this.usersService.create({
            ...createUserDto,
            password: hash,
        });
        const tokens = await this.getTokens(newUser._id, newUser.username);
        await this.updateRefreshToken(newUser._id, tokens.refreshToken);
        return tokens;
    }
    async signIn(data) {
        const user = await this.usersService.findByUsername(data.username);
        if (!user)
            throw new common_1.BadRequestException('User does not exist');
        const passwordMatches = await argon2.verify(user.password, data.password);
        if (!passwordMatches)
            throw new common_1.BadRequestException('Password is incorrect');
        const tokens = await this.getTokens(user._id, user.username);
        await this.updateRefreshToken(user._id, tokens.refreshToken);
        return tokens;
    }
    async logout(userId) {
        this.usersService.update(userId, { refreshToken: null });
    }
    async refreshTokens(userId, refreshToken) {
        const user = await this.usersService.findById(userId);
        if (!user || !user.refreshToken)
            throw new common_1.ForbiddenException('Access Denied');
        const refreshTokenMatches = await argon2.verify(user.refreshToken, refreshToken);
        if (!refreshTokenMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens(user.id, user.username);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
    hashData(data) {
        return argon2.hash(data);
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.usersService.update(userId, {
            refreshToken: hashedRefreshToken,
        });
    }
    async getTokens(userId, username) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                username,
            }, {
                secret: contants_1.jwtConstants.secret,
                expiresIn: '15m',
            }),
            this.jwtService.signAsync({
                sub: userId,
                username,
            }, {
                secret: contants_1.jwtConstants.secret,
                expiresIn: '7d',
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map