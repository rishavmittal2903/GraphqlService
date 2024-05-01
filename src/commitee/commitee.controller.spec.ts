import { Test, TestingModule } from '@nestjs/testing';
import { CommiteeController } from './commitee.controller';

describe('CommiteeController', () => {
  let controller: CommiteeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommiteeController],
    }).compile();

    controller = module.get<CommiteeController>(CommiteeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
