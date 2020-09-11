import { Injectable } from "@nestjs/common";

import {Product} from './product.model'

@Injectable()
export class ProductsService {
    Products: Product[] = [];

    insertProduct (title: string, desc: string, price: number) {
        const newProduct = new Product(new Date().toDateString(), title, desc, price);
        this.Products.push(newProduct);

        return newProduct;
    };
}