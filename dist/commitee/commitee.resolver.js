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
exports.CommiteeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const commitee_service_1 = require("./commitee.service");
const commitee_schema_1 = require("../schema/commitee.schema");
const commitee_dto_1 = require("../dto/commitee.dto");
const commitee_dto_2 = require("../dto/commitee.dto");
let CommiteeResolver = class CommiteeResolver {
    constructor(commiteeService) {
        this.commiteeService = commiteeService;
    }
    async getAllCommitees() {
        return this.commiteeService.getAllCommitees();
    }
    async getCommiteeById(id) {
        return this.commiteeService.getCommiteeById(id);
    }
    async getCommiteesByMemberId(id) {
        return this.commiteeService.getCommiteesByMemberId(id);
    }
    async deleteCommiteeById(id) {
        return this.commiteeService.deleteCommiteeById(id);
    }
    async createCommitee(commitee) {
        return this.commiteeService.createCommitee(commitee);
    }
    async updateCommitee(updateCommitee, id) {
        return this.commiteeService.updateCommitee(id, updateCommitee);
    }
};
exports.CommiteeResolver = CommiteeResolver;
__decorate([
    (0, graphql_1.Query)(() => [commitee_schema_1.Commitee]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommiteeResolver.prototype, "getAllCommitees", null);
__decorate([
    (0, graphql_1.Query)(() => commitee_schema_1.Commitee),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommiteeResolver.prototype, "getCommiteeById", null);
__decorate([
    (0, graphql_1.Query)(() => [commitee_schema_1.Commitee]),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommiteeResolver.prototype, "getCommiteesByMemberId", null);
__decorate([
    (0, graphql_1.Query)(() => commitee_schema_1.Commitee),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommiteeResolver.prototype, "deleteCommiteeById", null);
__decorate([
    (0, graphql_1.Mutation)(() => commitee_schema_1.Commitee),
    __param(0, (0, graphql_1.Args)('commitee')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commitee_dto_1.CreateCommiteeDto]),
    __metadata("design:returntype", Promise)
], CommiteeResolver.prototype, "createCommitee", null);
__decorate([
    (0, graphql_1.Mutation)(() => commitee_schema_1.Commitee),
    __param(0, (0, graphql_1.Args)('updateCommitee')),
    __param(1, (0, graphql_1.Args)('commiteeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commitee_dto_2.UpdateCommiteeDto, String]),
    __metadata("design:returntype", Promise)
], CommiteeResolver.prototype, "updateCommitee", null);
exports.CommiteeResolver = CommiteeResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [commitee_service_1.CommiteeService])
], CommiteeResolver);
//# sourceMappingURL=commitee.resolver.js.map