import { CommiteeService } from './commitee.service';
import { CreateCommiteeDto } from 'src/dto/commitee.dto';
import { UpdateCommiteeDto } from 'src/dto/commitee.dto';
export declare class CommiteeResolver {
    private readonly commiteeService;
    constructor(commiteeService: CommiteeService);
    getAllCommitees(): Promise<import("../interface/ICommitee").ICommitee[]>;
    getCommiteeById(id: string): Promise<import("../interface/ICommitee").ICommitee>;
    getCommiteesByMemberId(id: string): Promise<import("../interface/ICommitee").ICommitee[]>;
    deleteCommiteeById(id: string): Promise<any>;
    createCommitee(commitee: CreateCommiteeDto): Promise<import("../interface/ICommitee").ICommitee>;
    updateCommitee(updateCommitee: UpdateCommiteeDto, id: string): Promise<import("../interface/ICommitee").ICommitee>;
}
