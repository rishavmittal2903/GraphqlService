import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("../schema/user.schema").UserDocument>;
    findAll(): Promise<import("../schema/user.schema").UserDocument[]>;
    findById(id: string): Promise<import("../schema/user.schema").UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../schema/user.schema").UserDocument>;
    remove(id: string): Promise<any>;
}
