import { Controller, Post, Body } from "@nestjs/common";

import { ProductsService } from './product.service'

@Controller('products')
export class ProfuctsController {
    constructor(private readonly productsService : ProductsService){}
    
    @Post()
    addProduct(@Body('title') prodTitle: string, @Body('description') prodDescription: string, @Body('price') prodPrice: number) : any {
        const product = this.productsService.insertProduct(prodTitle, prodDescription, prodPrice);

        return product
    }
}