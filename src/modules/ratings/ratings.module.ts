import { Module } from '@nestjs/common';
import { RatingsController } from './ratings.controller';
import { RatingsService } from './ratings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Rating, RatingsSchema } from './schemas/ratings.schema';
import { UserSchema } from '../users/schemas/users.schema';
import { OrdersSchema } from '../orders/schemas/orders.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rating.name, schema: RatingsSchema }]),
    MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Orders', schema: OrdersSchema }])
  ],
  providers: [RatingsService],
  controllers: [RatingsController],
})
export class RatingsModule {}
