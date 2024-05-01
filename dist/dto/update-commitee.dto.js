"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommiteeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const commitee_dto_1 = require("./commitee.dto");
class UpdateCommiteeDto extends (0, mapped_types_1.PartialType)(commitee_dto_1.CreateCommiteeDto) {
}
exports.UpdateCommiteeDto = UpdateCommiteeDto;
//# sourceMappingURL=update-commitee.dto.js.map