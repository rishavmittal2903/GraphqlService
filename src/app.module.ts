import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { CommiteeSchema } from './schema/commitee.schema';
import { CommiteeController } from './commitee/commitee.controller';
import { CommiteeService } from './commitee/commitee.service';
import { CommiteeResolver } from './commitee/commitee.resolver';
import { CommiteeModule } from './commitee/commitee.module';
import { mongoDbConnection } from './common/utility/utility';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: [
        '.env.development.local',
        '.env.local',
        '.env.production.local',
        '.env.test.local',
      ],
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      mongoDbConnection,
      { dbName: 'flagManagement' },
    ),
    MongooseModule.forFeature([{ name: 'Commitee', schema: CommiteeSchema }]),
    // AuthModule,
    UsersModule,
    CommiteeModule,
    // GoogleModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: true,
    }),
  ],
  controllers: [CommiteeController],
  providers: [CommiteeService, CommiteeResolver ],
})
export class AppModule {}
