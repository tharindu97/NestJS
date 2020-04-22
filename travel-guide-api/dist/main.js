"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const express = require("express");
const platform_express_1 = require("@nestjs/platform-express");
const functions = require("firebase-functions");
const user_module_1 = require("./user/user.module");
const server = express();
exports.createNestServer = async (expressInstance) => {
    const app = await core_1.NestFactory.create(user_module_1.UserModule, new platform_express_1.ExpressAdapter(expressInstance));
    return app.init();
};
exports.createNestServer(server)
    .then(v => console.log('Travel_Guide-API ready'))
    .catch(err => console.error('API initialization failed', err));
exports.api = functions.https.onRequest(server);
//# sourceMappingURL=main.js.map