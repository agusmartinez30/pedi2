import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interfaces/products.interfaces';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Products')private readonly productModel: Model<Product>){}

    async getAll(){
        return this.productModel.find();
    }

    async getById(id: string): Promise<Product> {
        const result = await this.productModel.findById(id).exec();
        if (!result) {
          throw new NotFoundException('Product not found');
        }
        return result;
    }

    async create(product: Product): Promise<Product> {
        const result = new this.productModel(product);
        return await result.save();
    }

    async update(id: string, updateBody: any): Promise<Product> {
        const result = await this.productModel.findByIdAndUpdate(id, updateBody, { new: true }).exec();
        if (!result) {
          throw new NotFoundException('Product not found');
        }
        return result;
    }

    async delete(id: string): Promise<Product> {
        const result = await this.productModel.findByIdAndDelete(id).exec();
        if (!result) {
        throw new NotFoundException('Product not found');
        }
        return result;
    }
}
