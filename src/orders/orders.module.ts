import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersSchema } from './schemas/orders.schema';
import { ProductsModule } from 'src/products/products.module';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Orders',
            schema: OrdersSchema
        }]),
        ProductsModule
    ],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
