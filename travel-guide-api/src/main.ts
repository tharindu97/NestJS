import { NestFactory } from '@nestjs/core';
//import { AppModule } from './app.module';
import * as express from 'express';
import { async } from 'rxjs/internal/scheduler/async';
import {ExpressAdapter} from '@nestjs/platform-express';
import * as functions from 'firebase-functions'; 
import { UserModule } from './user/user.module';

import * as admin from 'firebase-admin';

const server = express();

export const createNestServer = async (expressInstance)=>{
  
  admin.initializeApp({
    credential:admin.credential.applicationDefault(),
    databaseURL: "https://panama-ac424.firebaseio.com"
  });
  
  const app = await NestFactory.create(
    UserModule,
    new ExpressAdapter(expressInstance)
  );
  return app.init();
};

createNestServer(server)
    .then(v=>console.log('Travel_Guide-API ready'))
    .catch(err=>console.error('API initialization failed',err));

export const api = functions.https.onRequest(server);
