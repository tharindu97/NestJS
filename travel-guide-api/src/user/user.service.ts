import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    
    constructor(private userRepository: UserRepository){}

    async createUser(userDto: UserDto): Promise<void>{
        return this.userRepository.addOrUpdate(userDto);
    }
}
