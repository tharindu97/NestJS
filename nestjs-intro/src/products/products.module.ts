import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from "./products.controller";
import { ProductService } from "./products.service";
import { from } from "rxjs";
import { ProductSchema } from "./product.model";

@Module({
    imports:[MongooseModule.forFeature([{name:'Product', schema: ProductSchema}])],
    controllers:[ProductsController],
    providers:[ProductService]
})
export class ProductModule{}