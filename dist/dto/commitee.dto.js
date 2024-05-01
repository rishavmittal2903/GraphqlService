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
exports.UpdateCommiteeDto = exports.CreateCommiteeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const graphql_1 = require("@nestjs/graphql");
let CommiteePaymentSchedules = class CommiteePaymentSchedules {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CommiteePaymentSchedules.prototype, "paymentDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CommiteePaymentSchedules.prototype, "isPaid", void 0);
CommiteePaymentSchedules = __decorate([
    (0, graphql_1.InputType)()
], CommiteePaymentSchedules);
let CommitteeMemberRelations = class CommitteeMemberRelations {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CommitteeMemberRelations.prototype, "commiteeId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CommitteeMemberRelations.prototype, "isDefaulter", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommiteePaymentSchedules]),
    __metadata("design:type", Array)
], CommitteeMemberRelations.prototype, "paymentDetail", void 0);
CommitteeMemberRelations = __decorate([
    (0, graphql_1.InputType)()
], CommitteeMemberRelations);
let CommiteeMembers = class CommiteeMembers {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CommiteeMembers.prototype, "memberId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CommiteeMembers.prototype, "memberName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommitteeMemberRelations]),
    __metadata("design:type", Array)
], CommiteeMembers.prototype, "commiteeRelation", void 0);
CommiteeMembers = __decorate([
    (0, graphql_1.InputType)()
], CommiteeMembers);
let CreateCommiteeDto = class CreateCommiteeDto {
};
exports.CreateCommiteeDto = CreateCommiteeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCommiteeDto.prototype, "commiteeId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCommiteeDto.prototype, "commiteeName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCommiteeDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCommiteeDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCommiteeDto.prototype, "paymentDay", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCommiteeDto.prototype, "lotteryDay", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCommiteeDto.prototype, "reminderDay", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateCommiteeDto.prototype, "noOfReminders", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCommiteeDto.prototype, "commiteeType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCommiteeDto.prototype, "commiteeStatus", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => [CommiteeMembers]),
    __metadata("design:type", Array)
], CreateCommiteeDto.prototype, "members", void 0);
exports.CreateCommiteeDto = CreateCommiteeDto = __decorate([
    (0, graphql_1.InputType)()
], CreateCommiteeDto);
let UpdateCommiteePaymentSchedules = class UpdateCommiteePaymentSchedules {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteePaymentSchedules.prototype, "paymentDate", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UpdateCommiteePaymentSchedules.prototype, "isPaid", void 0);
UpdateCommiteePaymentSchedules = __decorate([
    (0, graphql_1.InputType)()
], UpdateCommiteePaymentSchedules);
let UpdateCommitteeMemberRelations = class UpdateCommitteeMemberRelations {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommitteeMemberRelations.prototype, "commiteeId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UpdateCommitteeMemberRelations.prototype, "isDefaulter", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UpdateCommiteePaymentSchedules], { nullable: true }),
    __metadata("design:type", Array)
], UpdateCommitteeMemberRelations.prototype, "paymentDetail", void 0);
UpdateCommitteeMemberRelations = __decorate([
    (0, graphql_1.InputType)()
], UpdateCommitteeMemberRelations);
let UpdateCommiteeMembers = class UpdateCommiteeMembers {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteeMembers.prototype, "memberId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteeMembers.prototype, "memberName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UpdateCommitteeMemberRelations], { nullable: true }),
    __metadata("design:type", Array)
], UpdateCommiteeMembers.prototype, "commiteeRelation", void 0);
UpdateCommiteeMembers = __decorate([
    (0, graphql_1.InputType)()
], UpdateCommiteeMembers);
let UpdateCommiteeDto = class UpdateCommiteeDto {
};
exports.UpdateCommiteeDto = UpdateCommiteeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteeDto.prototype, "commiteeId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteeDto.prototype, "commiteeName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteeDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteeDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteeDto.prototype, "paymentDay", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteeDto.prototype, "lotteryDay", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteeDto.prototype, "reminderDay", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateCommiteeDto.prototype, "noOfReminders", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteeDto.prototype, "commiteeType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommiteeDto.prototype, "commiteeStatus", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => [UpdateCommiteeMembers], { nullable: true }),
    __metadata("design:type", Array)
], UpdateCommiteeDto.prototype, "members", void 0);
exports.UpdateCommiteeDto = UpdateCommiteeDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateCommiteeDto);
//# sourceMappingURL=commitee.dto.js.map