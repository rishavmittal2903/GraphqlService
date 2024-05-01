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
exports.CommiteeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const commitee_dto_1 = require("../dto/commitee.dto");
const update_commitee_dto_1 = require("../dto/update-commitee.dto");
const commitee_service_1 = require("./commitee.service");
let CommiteeController = class CommiteeController {
    constructor(commiteeService) {
        this.commiteeService = commiteeService;
    }
    async createCommitee(response, createCommiteeDto) {
        try {
            const newCommitee = await this.commiteeService.createCommitee(createCommiteeDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Commitee has been created successfully',
                newCommitee,
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Commitee not created!',
                error: err,
            });
        }
    }
    async updateCommitee(response, commiteetId, updateCommiteeDto) {
        try {
            const existingCommitee = await this.commiteeService.updateCommitee(commiteetId, updateCommiteeDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Commitee has been successfully updated',
                existingCommitee,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getCommitees(response) {
        try {
            const commmiteeData = await this.commiteeService.getAllCommitees();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All commitee data found successfully',
                commmiteeData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getCommiteeById(response, commiteeId) {
        try {
            const existingCommitee = await this.commiteeService.getCommiteeById(commiteeId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Commitee found successfully',
                existingCommitee,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(err.status).json(err.response);
        }
    }
    async getCommiteesByMemberId(response, memberId) {
        try {
            const existingCommitee = await this.commiteeService.getCommiteesByMemberId(memberId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Commitees found successfully',
                existingCommitee,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(err.status).json(err.response);
        }
    }
    async deleteCommiteeById(response, commiteeId) {
        try {
            const deletedCommitee = await this.commiteeService.deleteCommiteeById(commiteeId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Commitee deleted successfully',
                deletedCommitee,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(err.status).json(err.response);
        }
    }
};
exports.CommiteeController = CommiteeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, commitee_dto_1.CreateCommiteeDto]),
    __metadata("design:returntype", Promise)
], CommiteeController.prototype, "createCommitee", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_commitee_dto_1.UpdateCommiteeDto]),
    __metadata("design:returntype", Promise)
], CommiteeController.prototype, "updateCommitee", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommiteeController.prototype, "getCommitees", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CommiteeController.prototype, "getCommiteeById", null);
__decorate([
    (0, common_1.Get)('/commiteeByMember/:memberId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CommiteeController.prototype, "getCommiteesByMemberId", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CommiteeController.prototype, "deleteCommiteeById", null);
exports.CommiteeController = CommiteeController = __decorate([
    (0, common_1.Controller)('Commitee'),
    (0, swagger_1.ApiTags)('Commitee'),
    __metadata("design:paramtypes", [commitee_service_1.CommiteeService])
], CommiteeController);
//# sourceMappingURL=commitee.controller.js.map