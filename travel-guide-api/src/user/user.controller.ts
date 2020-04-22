import { Controller, Body, Post } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";

@Controller('users')
export class UserController{
    constructor(){}

    @Post()
    createUser(@Body() user: UserDto){
        return 'user created';
    }
}