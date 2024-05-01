import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateStudentDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly roleNumber: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly class: number;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly gender: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly marks: number;
}
