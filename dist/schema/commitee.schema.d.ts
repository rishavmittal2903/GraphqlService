/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
import { COMMITEE_STATUS_TYPE, COMMITTE_TYPE } from 'src/interface/ICommitee';
export type CommiteeDocument = Commitee & Document;
export declare class CommiteePaymentSchedule {
    paymentDate: string;
    isPaid: boolean;
}
export declare class CommitteeMemberRelation {
    commiteeId: string;
    isDefaulter: boolean;
    paymentDetail: CommiteePaymentSchedule[];
    isActive: boolean;
}
export declare class CommiteeMember {
    memberId: string;
    memberName: string;
    commiteeRelation: CommitteeMemberRelation[];
    isOwner: boolean;
}
export declare class Commitee {
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
    members: CommiteeMember[];
}
export declare const CommiteeSchema: import("mongoose").Schema<Commitee, import("mongoose").Model<Commitee, any, any, any, Document<unknown, any, Commitee> & Commitee & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Commitee, Document<unknown, {}, import("mongoose").FlatRecord<Commitee>> & import("mongoose").FlatRecord<Commitee> & {
    _id: import("mongoose").Types.ObjectId;
}>;
