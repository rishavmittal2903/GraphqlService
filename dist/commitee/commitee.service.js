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
exports.CommiteeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CommiteeService = class CommiteeService {
    constructor(commiteeModel) {
        this.commiteeModel = commiteeModel;
    }
    async createCommitee(createCommiteeDto) {
        const newCommitee = await new this.commiteeModel(createCommiteeDto);
        return newCommitee.save();
    }
    async updateCommitee(commiteeId, updateCommiteeDto) {
        const existingCommitee = await this.commiteeModel.findOneAndUpdate({ commiteeId }, updateCommiteeDto, { new: true });
        if (!existingCommitee) {
            throw new common_1.NotFoundException(`Commitee #${commiteeId} not found`);
        }
        return existingCommitee;
    }
    async getAllCommitees() {
        const commiteeData = await this.commiteeModel.find();
        if (!commiteeData || commiteeData.length == 0) {
            throw new common_1.NotFoundException('commitee data not found!');
        }
        return commiteeData;
    }
    async getCommiteeById(commiteeId) {
        const existingCommitee = await this.commiteeModel
            .findOne({ commiteeId: commiteeId })
            .exec();
        if (!existingCommitee) {
            throw new common_1.NotFoundException(`Commitee #${commiteeId} not found`);
        }
        return existingCommitee;
    }
    async getCommiteesByMemberId(memberId) {
        const commiteeData = await this.commiteeModel.find({
            'members.memberId': memberId,
        });
        if (!commiteeData) {
            throw new common_1.NotFoundException(`Commitees #${memberId} not found`);
        }
        return commiteeData;
    }
    async deleteCommiteeById(commiteeId) {
        const deletedCommitee = await this.commiteeModel.findOneAndDelete({
            commiteeId,
        });
        if (!deletedCommitee) {
            throw new common_1.NotFoundException(`Commitee #${commiteeId} not found`);
        }
        return deletedCommitee;
    }
};
exports.CommiteeService = CommiteeService;
exports.CommiteeService = CommiteeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Commitee')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CommiteeService);
//# sourceMappingURL=commitee.service.js.map