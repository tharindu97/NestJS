import { Injectable } from "@nestjs/common";
import { Product } from './product.model';


@Injectable()
export class ProductService{
    products: Product[] = [];
    
    insertProduct(title: string, desc:string, price:number){
        const proId = new Date().toString();
        const newProduct = new Product(proId,title,desc,price);
        this.products.push(newProduct);
        return proId;
    }
}