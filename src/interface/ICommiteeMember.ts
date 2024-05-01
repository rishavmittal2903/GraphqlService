export interface ICommiteeMember {
  memberId: string;
  memberName: string;
  commiteeRelation: Array<ICommitteeMemberRelation>;
  isOwner: boolean;
}

export interface ICommitteeMemberRelation {
  commiteeId: string;
  isDefaulter: boolean;
  paymentDetail: Array<ICommiteePaymentSchedule>;
  isActive: boolean;
}

export interface ICommiteePaymentSchedule {
  paymentDate: string;
  isPaid: boolean;
}
