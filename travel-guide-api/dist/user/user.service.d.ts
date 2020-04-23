import { UserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(userDto: UserDto): Promise<void>;
}
