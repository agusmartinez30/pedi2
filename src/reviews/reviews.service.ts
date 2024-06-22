import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './interfaces/reviews.interfaces';

@Injectable()
export class ReviewsService {

    constructor(@InjectModel('Review')private readonly adminModel: Model<Review>){}

    async getAll(){
        return this.adminModel.find();
    }

    async getById(id: string): Promise<Review> {
        const result = await this.adminModel.findById(id).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async create(admin: Review): Promise<Review> {
        const result = new this.adminModel(admin);
        return await result.save();
    }

    async update(id: string, updateBody: any): Promise<Review> {
        const result = await this.adminModel.findByIdAndUpdate(id, updateBody, { new: true }).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async delete(id: string): Promise<Review> {
        const result = await this.adminModel.findByIdAndDelete(id).exec();
        if (!result) {
        throw new NotFoundException('User not found');
        }
        return result;
    }
}
