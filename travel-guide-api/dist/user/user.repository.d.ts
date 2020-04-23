import { UserDto } from "./dto/user.dto";
export declare class UserRepository {
    addOrUpdate(userDto: UserDto): Promise<void>;
}
