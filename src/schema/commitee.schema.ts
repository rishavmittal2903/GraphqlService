import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { COMMITEE_STATUS_TYPE, COMMITTE_TYPE } from 'src/interface/ICommitee';

import { ObjectType, Field } from '@nestjs/graphql';
export type CommiteeDocument = Commitee & Document;

@ObjectType()
export class CommiteePaymentSchedule {
  @Field()
  paymentDate: string;
  @Field()
  isPaid: boolean;
}
@ObjectType()
export class CommitteeMemberRelation {
  @Field()
  commiteeId: string;
  @Field()
  isDefaulter: boolean;
  @Field(() => [CommiteePaymentSchedule])
  paymentDetail: CommiteePaymentSchedule[];
  isActive: boolean;
}
@ObjectType()
export class CommiteeMember {
  @Field()
  memberId: string;
  @Field()
  memberName: string;
  @Field(() => [CommitteeMemberRelation])
  commiteeRelation: CommitteeMemberRelation[];
  isOwner: boolean;
}

@Schema()
@ObjectType()
export class Commitee {
  @Prop({ required: true, unique: true })
  @Field()
  commiteeId: string;

  @Prop({ required: true })
  @Field()
  commiteeName: string;

  @Prop({ required: true })
  @Field()
  startDate: string;

  @Prop({ required: true })
  @Field()
  endDate: string;
  @Prop({ required: true })
  @Field()
  paymentDay: string;
  @Prop({ required: true })
  @Field()
  lotteryDay: string;
  @Prop({ required: true })
  @Field()
  reminderDay: string;
  @Prop({ required: true })
  @Field()
  noOfReminders: number;
  @Field({ nullable: true })
  commiteeType?: COMMITTE_TYPE;
  @Field()
  @Prop({ required: true })
  commiteeStatus: COMMITEE_STATUS_TYPE;
  @Field(() => [CommiteeMember])
  @Prop({ required: true })
  members: CommiteeMember[];
}

export const CommiteeSchema = SchemaFactory.createForClass(Commitee);
