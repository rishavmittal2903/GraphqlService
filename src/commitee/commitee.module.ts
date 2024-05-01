import { Module } from '@nestjs/common';
import { CommiteeService } from './commitee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommiteeController } from './commitee.controller';
import { Commitee, CommiteeSchema } from 'src/schema/commitee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Commitee.name, schema: CommiteeSchema },
    ]),
  ],
  controllers: [CommiteeController],
  providers: [CommiteeService],
  exports: [CommiteeService],
})
export class CommiteeModule {}
