import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(user: UserDto): Promise<void>;
}
