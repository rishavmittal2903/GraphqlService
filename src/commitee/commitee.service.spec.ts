import { Test, TestingModule } from '@nestjs/testing';
import { CommiteeService } from './commitee.service';

describe('CommiteeService', () => {
  let service: CommiteeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommiteeService],
    }).compile();

    service = module.get<CommiteeService>(CommiteeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
