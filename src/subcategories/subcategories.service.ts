import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subcategories } from './interfaces/subcategories.interfaces';

@Injectable()
export class SubcategoriesService {

    constructor(@InjectModel('Subcategory')private readonly subcategoriesModel: Model<Subcategories>){}

    async getAll(){
        return this.subcategoriesModel.find();
    }

    async getById(id: string): Promise<Subcategories> {
        const result = await this.subcategoriesModel.findById(id).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async create(subcategory: Subcategories): Promise<Subcategories> {
        const result = new this.subcategoriesModel(subcategory);
        return await result.save();
    }

    async update(id: string, updateBody: any): Promise<Subcategories> {
        const result = await this.subcategoriesModel.findByIdAndUpdate(id, updateBody, { new: true }).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async delete(id: string): Promise<Subcategories> {
        const result = await this.subcategoriesModel.findByIdAndDelete(id).exec();
        if (!result) {
        throw new NotFoundException('User not found');
        }
        return result;
    }
}
