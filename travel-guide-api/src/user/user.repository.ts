import { Injectable } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import * as admin from 'firebase-admin';

@Injectable()
export class UserRepository{

    async addOrUpdate(userDto: UserDto): Promise<void> {
        const db = admin.firestore();
        db.collection('users').doc(userDto.uid).set({
            firstName:userDto.firstName,
            lastName:userDto.lastName,
            email:userDto.email,
            userType:userDto.userType
        });
    }
}