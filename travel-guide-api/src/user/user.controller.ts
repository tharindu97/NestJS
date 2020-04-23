import { Controller, Body, Post } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController{
    constructor(private userService: UserService){}

    @Post()
    async createUser(@Body() user: UserDto): Promise<void>{
        return this.userService.createUser(user);
    }
}