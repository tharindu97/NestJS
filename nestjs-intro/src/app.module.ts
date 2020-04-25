import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { from } from 'rxjs';


@Module({
  imports: [ProductModule, 
    MongooseModule.forRoot('mongodb+srv://Tharindu1:Tharindu1@cluster0-h7c4s.mongodb.net/test?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
