"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const ArgumentError_1 = require("../error/ArgumentError");
let UserRepository = class UserRepository {
    async addOrUpdate(userDto) {
        const db = admin.firestore();
        db.collection('users').doc(userDto.uid).set({
            firstName: userDto.firstName,
            lastName: userDto.lastName,
            email: userDto.email,
            userType: userDto.userType
        });
    }
    async getUser(uid) {
        if (uid == null || undefined || uid === '') {
            throw new ArgumentError_1.ArgumentError('uid is null or empty');
        }
        const db = admin.firestore();
        const data = await db.collection('users').doc(uid).get();
        if (data.exists) {
            return {
                uid,
                firstName: data.data().firstName,
                lastName: data.data().lastName,
                email: data.data().email,
                userType: data.data().userType
            };
        }
        return null;
    }
};
UserRepository = __decorate([
    common_1.Injectable()
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map