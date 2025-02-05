import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from './product.model';


@Injectable()
export class ProductService{
     private products: Product[] = [];
    
    insertProduct(title: string, desc:string, price:number){
        const proId = Math.random().toString();
        const newProduct = new Product(proId,title,desc,price);
        this.products.push(newProduct);
        return proId;
    }

    getProducts(){
        return [...this.products];
    }

    getSingleProduct(productId: string){
        const product = this.findProduct(productId)[0];
        return {...product};
    }

    updateProduct(productId: string,title: string, desc:string, price:number){
        const [product, index] = this.findProduct(productId);
        const updateProduct = {...product};
        if(title){
            updateProduct.title = title;
        }
        if(desc){
            updateProduct.description = desc;
        }
        if(price){
            updateProduct.price = price;
        }

        this.products[index]=updateProduct;
    }

    deleteProduct(proId: string){
        const index = this.findProduct(proId)[1];
        this.products.splice(index,1);
    }

    private findProduct(id:string): [Product,number]{
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        
        if(!product){
            throw new NotFoundException('Cloud not Found Products');
        }
        return [product, productIndex];
    }
}