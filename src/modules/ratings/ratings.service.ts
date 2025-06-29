import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from '../../core/base.service';
import { Rating, RatingDocument } from './schemas/ratings.schema';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { User } from '../users/interfaces/users.interfaces';
import { Order } from '../orders/interfaces/orders.interfaces';

@Injectable()
export class RatingsService extends BaseService<RatingDocument> {
  constructor(
    @InjectModel(Rating.name) private readonly ratingModel: Model<RatingDocument>,
    @InjectModel('Users') private readonly usersModel: Model<User>,
    @InjectModel('Orders') private readonly ordersModel: Model<Order>
  ) {
    super(ratingModel);
  }

  async create(createRatingDto: CreateRatingDto) {
    try {
        const order = await this.ordersModel.findById(createRatingDto.orderId).exec();
        if (!order) { throw new NotFoundException('Order not found')}

        const driver = await this.usersModel.findById(order.driverId).exec();
        if (!driver) { throw new NotFoundException('Driver not found')}

        const newRating = new this.ratingModel(createRatingDto);
        const savedRating = await newRating.save();

        const driverRatingCount = await this.ratingModel.find({ driverId: order.driverId }).exec();
        
        const newDriverRating = ( driver.rating + savedRating.rating) / driverRatingCount.length;
        await this.usersModel.findByIdAndUpdate(order.driverId, { rating: newDriverRating }, { new: true }).exec();
        return savedRating;
    } catch (error) {
        console.error('Error creating rating:', error);
        throw new InternalServerErrorException('Error creating rating');
    }
  }
}
