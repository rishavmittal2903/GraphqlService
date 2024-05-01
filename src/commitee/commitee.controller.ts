import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCommiteeDto } from 'src/dto/commitee.dto';
import { UpdateCommiteeDto } from 'src/dto/update-commitee.dto';
import { CommiteeService } from './commitee.service';
@Controller('Commitee')
@ApiTags('Commitee')
export class CommiteeController {
  constructor(private readonly commiteeService: CommiteeService) {}
  @Post()
  async createCommitee(
    @Res() response,
    @Body() createCommiteeDto: CreateCommiteeDto,
  ) {
    try {
      const newCommitee =
        await this.commiteeService.createCommitee(createCommiteeDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Commitee has been created successfully',
        newCommitee,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Commitee not created!',
        error: err,
      });
    }
  }
  @Put('/:id')
  async updateCommitee(
    @Res() response,
    @Param('id') commiteetId: string,
    @Body() updateCommiteeDto: UpdateCommiteeDto,
  ) {
    try {
      const existingCommitee = await this.commiteeService.updateCommitee(
        commiteetId,
        updateCommiteeDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Commitee has been successfully updated',
        existingCommitee,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get()
  async getCommitees(@Res() response) {
    try {
      const commmiteeData = await this.commiteeService.getAllCommitees();
      return response.status(HttpStatus.OK).json({
        message: 'All commitee data found successfully',
        commmiteeData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getCommiteeById(@Res() response, @Param('id') commiteeId: string) {
    try {
      const existingCommitee =
        await this.commiteeService.getCommiteeById(commiteeId);
      return response.status(HttpStatus.OK).json({
        message: 'Commitee found successfully',
        existingCommitee,
      });
    } catch (err) {
      console.log(err);
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/commiteeByMember/:memberId')
  async getCommiteesByMemberId(
    @Res() response,
    @Param('memberId') memberId: string,
  ) {
    try {
      const existingCommitee =
        await this.commiteeService.getCommiteesByMemberId(memberId);
      return response.status(HttpStatus.OK).json({
        message: 'Commitees found successfully',
        existingCommitee,
      });
    } catch (err) {
      console.log(err);
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteCommiteeById(@Res() response, @Param('id') commiteeId: string) {
    try {
      const deletedCommitee =
        await this.commiteeService.deleteCommiteeById(commiteeId);
      return response.status(HttpStatus.OK).json({
        message: 'Commitee deleted successfully',
        deletedCommitee,
      });
    } catch (err) {
      console.log(err);
      return response.status(err.status).json(err.response);
    }
  }
}
