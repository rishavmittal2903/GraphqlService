import { PartialType } from '@nestjs/mapped-types';
import { CreateCommiteeDto } from './commitee.dto';
export class UpdateCommiteeDto extends PartialType(CreateCommiteeDto) {}
