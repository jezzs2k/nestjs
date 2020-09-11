import {Module} from '@nestjs/common';

import { ProfuctsController } from './product.controller';
import { ProductsService } from './product.service';

@Module({
    controllers: [ProfuctsController],
    providers: [ProductsService]
})

export class ProductModule {}