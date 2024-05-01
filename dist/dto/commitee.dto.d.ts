declare class CommiteePaymentSchedules {
    paymentDate: string;
    isPaid: boolean;
}
declare class CommitteeMemberRelations {
    commiteeId: string;
    isDefaulter: boolean;
    paymentDetail: CommiteePaymentSchedules[];
    isActive: boolean;
}
declare class CommiteeMembers {
    memberId: string;
    memberName: string;
    commiteeRelation: CommitteeMemberRelations[];
    isOwner: boolean;
}
export declare class CreateCommiteeDto {
    readonly commiteeId: string;
    readonly commiteeName: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly paymentDay: string;
    readonly lotteryDay: string;
    readonly reminderDay: string;
    readonly noOfReminders: number;
    readonly commiteeType?: string;
    readonly commiteeStatus: string;
    readonly members: CommiteeMembers[];
}
declare class UpdateCommiteePaymentSchedules {
    paymentDate?: string;
    isPaid?: boolean;
}
declare class UpdateCommitteeMemberRelations {
    commiteeId?: string;
    isDefaulter?: boolean;
    paymentDetail?: UpdateCommiteePaymentSchedules[];
    isActive?: boolean;
}
declare class UpdateCommiteeMembers {
    memberId?: string;
    memberName?: string;
    commiteeRelation?: UpdateCommitteeMemberRelations[];
    isOwner?: boolean;
}
export declare class UpdateCommiteeDto {
    readonly commiteeId?: string;
    readonly commiteeName?: string;
    readonly startDate?: string;
    readonly endDate?: string;
    readonly paymentDay?: string;
    readonly lotteryDay?: string;
    readonly reminderDay?: string;
    readonly noOfReminders?: number;
    readonly commiteeType?: string;
    readonly commiteeStatus?: string;
    readonly members?: UpdateCommiteeMembers[];
}
export {};
