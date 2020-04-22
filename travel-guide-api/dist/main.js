"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express = require("express");
const platform_express_1 = require("@nestjs/platform-express");
const functions = require("firebase-functions");
const server = express();
exports.createNestServer = async (expressInstance) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter());
    return app.init();
};
exports.createNestServer(server)
    .then(v => console.log('Travel_Guide-API ready'))
    .catch(err => console.error('API initialization failed', err));
exports.api = functions.https.onRequest(server);
//# sourceMappingURL=main.js.map