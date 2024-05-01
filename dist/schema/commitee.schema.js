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
exports.CommiteeSchema = exports.Commitee = exports.CommiteeMember = exports.CommitteeMemberRelation = exports.CommiteePaymentSchedule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const ICommitee_1 = require("../interface/ICommitee");
const graphql_1 = require("@nestjs/graphql");
let CommiteePaymentSchedule = class CommiteePaymentSchedule {
};
exports.CommiteePaymentSchedule = CommiteePaymentSchedule;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CommiteePaymentSchedule.prototype, "paymentDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CommiteePaymentSchedule.prototype, "isPaid", void 0);
exports.CommiteePaymentSchedule = CommiteePaymentSchedule = __decorate([
    (0, graphql_1.ObjectType)()
], CommiteePaymentSchedule);
let CommitteeMemberRelation = class CommitteeMemberRelation {
};
exports.CommitteeMemberRelation = CommitteeMemberRelation;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CommitteeMemberRelation.prototype, "commiteeId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CommitteeMemberRelation.prototype, "isDefaulter", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommiteePaymentSchedule]),
    __metadata("design:type", Array)
], CommitteeMemberRelation.prototype, "paymentDetail", void 0);
exports.CommitteeMemberRelation = CommitteeMemberRelation = __decorate([
    (0, graphql_1.ObjectType)()
], CommitteeMemberRelation);
let CommiteeMember = class CommiteeMember {
};
exports.CommiteeMember = CommiteeMember;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CommiteeMember.prototype, "memberId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CommiteeMember.prototype, "memberName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommitteeMemberRelation]),
    __metadata("design:type", Array)
], CommiteeMember.prototype, "commiteeRelation", void 0);
exports.CommiteeMember = CommiteeMember = __decorate([
    (0, graphql_1.ObjectType)()
], CommiteeMember);
let Commitee = class Commitee {
};
exports.Commitee = Commitee;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Commitee.prototype, "commiteeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Commitee.prototype, "commiteeName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Commitee.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Commitee.prototype, "endDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Commitee.prototype, "paymentDay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Commitee.prototype, "lotteryDay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Commitee.prototype, "reminderDay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Commitee.prototype, "noOfReminders", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Commitee.prototype, "commiteeType", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Commitee.prototype, "commiteeStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommiteeMember]),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Commitee.prototype, "members", void 0);
exports.Commitee = Commitee = __decorate([
    (0, mongoose_1.Schema)(),
    (0, graphql_1.ObjectType)()
], Commitee);
exports.CommiteeSchema = mongoose_1.SchemaFactory.createForClass(Commitee);
//# sourceMappingURL=commitee.schema.js.map