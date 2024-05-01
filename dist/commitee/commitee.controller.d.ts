import { CreateCommiteeDto } from 'src/dto/commitee.dto';
import { UpdateCommiteeDto } from 'src/dto/update-commitee.dto';
import { CommiteeService } from './commitee.service';
export declare class CommiteeController {
    private readonly commiteeService;
    constructor(commiteeService: CommiteeService);
    createCommitee(response: any, createCommiteeDto: CreateCommiteeDto): Promise<any>;
    updateCommitee(response: any, commiteetId: string, updateCommiteeDto: UpdateCommiteeDto): Promise<any>;
    getCommitees(response: any): Promise<any>;
    getCommiteeById(response: any, commiteeId: string): Promise<any>;
    getCommiteesByMemberId(response: any, memberId: string): Promise<any>;
    deleteCommiteeById(response: any, commiteeId: string): Promise<any>;
}
