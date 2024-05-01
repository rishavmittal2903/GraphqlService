import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICommitee } from 'src/interface/ICommitee';
import { CreateCommiteeDto } from 'src/dto/commitee.dto';
import { UpdateCommiteeDto as UpdateGraphCommiteeDto } from 'src/dto/commitee.dto';

@Injectable()
export class CommiteeService {
  constructor(
    @InjectModel('Commitee') private commiteeModel: Model<ICommitee>,
  ) {}
  async createCommitee(
    createCommiteeDto: CreateCommiteeDto,
  ): Promise<ICommitee> {
    const newCommitee = await new this.commiteeModel(createCommiteeDto);
    return newCommitee.save();
  }
  async updateCommitee(
    commiteeId: string,
    updateCommiteeDto: UpdateGraphCommiteeDto,
  ): Promise<ICommitee> {
    const existingCommitee = await this.commiteeModel.findOneAndUpdate(
      { commiteeId },
      updateCommiteeDto,
      { new: true },
    );
    if (!existingCommitee) {
      throw new NotFoundException(`Commitee #${commiteeId} not found`);
    }
    return existingCommitee;
  }
  async getAllCommitees(): Promise<ICommitee[]> {
    const commiteeData = await this.commiteeModel.find();
    if (!commiteeData || commiteeData.length == 0) {
      throw new NotFoundException('commitee data not found!');
    }
    return commiteeData;
  }
  async getCommiteeById(commiteeId: string): Promise<ICommitee> {
    const existingCommitee = await this.commiteeModel
      .findOne({ commiteeId: commiteeId })
      .exec();
    if (!existingCommitee) {
      throw new NotFoundException(`Commitee #${commiteeId} not found`);
    }
    return existingCommitee;
  }
  async getCommiteesByMemberId(memberId: string): Promise<Array<ICommitee>> {
    const commiteeData = await this.commiteeModel.find({
      'members.memberId': memberId,
    });
    if (!commiteeData) {
      throw new NotFoundException(`Commitees #${memberId} not found`);
    }
    return commiteeData;
  }
  async deleteCommiteeById(commiteeId: string): Promise<any> {
    const deletedCommitee = await this.commiteeModel.findOneAndDelete({
      commiteeId,
    });
    if (!deletedCommitee) {
      throw new NotFoundException(`Commitee #${commiteeId} not found`);
    }
    return deletedCommitee;
  }
}
