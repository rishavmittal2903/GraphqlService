import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CommiteeService } from './commitee.service';
import { Commitee } from 'src/schema/commitee.schema';
import { CreateCommiteeDto } from 'src/dto/commitee.dto';
import { UpdateCommiteeDto } from 'src/dto/commitee.dto';
@Resolver()
export class CommiteeResolver {
  constructor(private readonly commiteeService: CommiteeService) {}
  @Query(() => [Commitee])
  async getAllCommitees() {
    return this.commiteeService.getAllCommitees();
  }
  @Query(() => Commitee)
  async getCommiteeById(@Args('id', { type: () => String }) id: string) {
    return this.commiteeService.getCommiteeById(id);
  }

  @Query(() => [Commitee])
  async getCommiteesByMemberId(@Args('id', { type: () => String }) id: string) {
    return this.commiteeService.getCommiteesByMemberId(id);
  }
  @Query(() => Commitee)
  async deleteCommiteeById(@Args('id', { type: () => String }) id: string) {
    return this.commiteeService.deleteCommiteeById(id);
  }
  @Mutation(() => Commitee)
  async createCommitee(@Args('commitee') commitee: CreateCommiteeDto) {
    return this.commiteeService.createCommitee(commitee);
  }

  @Mutation(() => Commitee)
  async updateCommitee(
    @Args('updateCommitee') updateCommitee: UpdateCommiteeDto,
    @Args('commiteeId') id: string,
  ) {
    return this.commiteeService.updateCommitee(id, updateCommitee);
  }
}
