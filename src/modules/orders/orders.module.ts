import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrdersSchema } from './schemas/orders.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrdersSchema }])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
