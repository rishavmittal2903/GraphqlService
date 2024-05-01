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
import { Model } from 'mongoose';
import { ICommitee } from 'src/interface/ICommitee';
import { CreateCommiteeDto } from 'src/dto/commitee.dto';
import { UpdateCommiteeDto as UpdateGraphCommiteeDto } from 'src/dto/commitee.dto';
export declare class CommiteeService {
    private commiteeModel;
    constructor(commiteeModel: Model<ICommitee>);
    createCommitee(createCommiteeDto: CreateCommiteeDto): Promise<ICommitee>;
    updateCommitee(commiteeId: string, updateCommiteeDto: UpdateGraphCommiteeDto): Promise<ICommitee>;
    getAllCommitees(): Promise<ICommitee[]>;
    getCommiteeById(commiteeId: string): Promise<ICommitee>;
    getCommiteesByMemberId(memberId: string): Promise<Array<ICommitee>>;
    deleteCommiteeById(commiteeId: string): Promise<any>;
}
