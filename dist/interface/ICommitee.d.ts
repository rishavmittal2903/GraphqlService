import { ICommiteeMember } from './ICommiteeMember';
export declare enum COMMITTE_TYPE {
    BID = "BID",
    NORMAL = "NORMAL"
}
export declare enum COMMITEE_STATUS_TYPE {
    ACTIVE = "ACTIVE",
    HOLD = "HOLD",
    CANCELED = "CANCELED",
    COMPLETED = "COMPLETED",
    INACTIVE = "INACTIVE"
}
export interface ICommitee {
    commiteeId: string;
    commiteeName: string;
    startDate: string;
    endDate: string;
    paymentDay: string;
    lotteryDay: string;
    reminderDay: string;
    noOfReminders: number;
    commiteeType?: COMMITTE_TYPE;
    commiteeStatus: COMMITEE_STATUS_TYPE;
    members: Array<ICommiteeMember>;
}
