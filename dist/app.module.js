"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const config_2 = require("./config/config");
const commitee_schema_1 = require("./schema/commitee.schema");
const commitee_controller_1 = require("./commitee/commitee.controller");
const commitee_service_1 = require("./commitee/commitee.service");
const commitee_resolver_1 = require("./commitee/commitee.resolver");
const commitee_module_1 = require("./commitee/commitee.module");
const utility_1 = require("./common/utility/utility");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [config_2.config],
                envFilePath: [
                    '.env.development.local',
                    '.env.local',
                    '.env.production.local',
                    '.env.test.local',
                ],
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(utility_1.mongoDbConnection, { dbName: 'flagManagement' }),
            mongoose_1.MongooseModule.forFeature([{ name: 'Commitee', schema: commitee_schema_1.CommiteeSchema }]),
            users_module_1.UsersModule,
            commitee_module_1.CommiteeModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                autoSchemaFile: true,
            }),
        ],
        controllers: [commitee_controller_1.CommiteeController],
        providers: [commitee_service_1.CommiteeService, commitee_resolver_1.CommiteeResolver],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map