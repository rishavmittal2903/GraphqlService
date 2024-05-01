import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
class CommiteePaymentSchedules {
  @Field()
  paymentDate: string;
  @Field()
  isPaid: boolean;
}
@InputType()
class CommitteeMemberRelations {
  @Field()
  commiteeId: string;
  @Field()
  isDefaulter: boolean;
  @Field(() => [CommiteePaymentSchedules])
  paymentDetail: CommiteePaymentSchedules[];
  isActive: boolean;
}
@InputType()
class CommiteeMembers {
  @Field()
  memberId: string;
  @Field()
  memberName: string;
  @Field(() => [CommitteeMemberRelations])
  commiteeRelation: CommitteeMemberRelations[];
  isOwner: boolean;
}

@InputType()
export class CreateCommiteeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Field()
  readonly commiteeId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Field()
  readonly commiteeName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Field()
  readonly startDate: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Field()
  readonly endDate: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Field()
  readonly paymentDay: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Field()
  readonly lotteryDay: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Field()
  readonly reminderDay: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  @Field()
  readonly noOfReminders: number;
  @IsString()
  @ApiProperty()
  @Field()
  readonly commiteeType?: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Field()
  readonly commiteeStatus: string;
  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  @Field(() => [CommiteeMembers])
  readonly members: CommiteeMembers[];
}

@InputType()
class UpdateCommiteePaymentSchedules {
  @Field({ nullable: true })
  paymentDate?: string;
  @Field({ nullable: true })
  isPaid?: boolean;
}
@InputType()
class UpdateCommitteeMemberRelations {
  @Field({ nullable: true })
  commiteeId?: string;
  @Field({ nullable: true })
  isDefaulter?: boolean;
  @Field(() => [UpdateCommiteePaymentSchedules], { nullable: true })
  paymentDetail?: UpdateCommiteePaymentSchedules[];
  isActive?: boolean;
}
@InputType()
class UpdateCommiteeMembers {
  @Field({ nullable: true })
  memberId?: string;
  @Field({ nullable: true })
  memberName?: string;
  @Field(() => [UpdateCommitteeMemberRelations], { nullable: true })
  commiteeRelation?: UpdateCommitteeMemberRelations[];
  isOwner?: boolean;
}

@InputType()
export class UpdateCommiteeDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  @Field({ nullable: true })
  readonly commiteeId?: string;
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  @Field({ nullable: true })
  readonly commiteeName?: string;
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  @Field({ nullable: true })
  readonly startDate?: string;
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  @Field({ nullable: true })
  readonly endDate?: string;
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  @Field({ nullable: true })
  readonly paymentDay?: string;
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  @Field({ nullable: true })
  readonly lotteryDay?: string;
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  @Field({ nullable: true })
  readonly reminderDay?: string;
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  @Field({ nullable: true })
  readonly noOfReminders?: number;
  @IsString()
  @IsOptional()
  @ApiProperty()
  @Field({ nullable: true })
  readonly commiteeType?: string;
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  @Field({ nullable: true })
  readonly commiteeStatus?: string;
  @IsArray()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  @Field(() => [UpdateCommiteeMembers], { nullable: true })
  readonly members?: UpdateCommiteeMembers[];
}
