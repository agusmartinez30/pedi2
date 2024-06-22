import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Publication } from './interfaces/publications.interfaces';

@Injectable()
export class PublicationsService {

    constructor(@InjectModel('Publication')private readonly adminModel: Model<Publication>){}

    async getAll(){
        return this.adminModel.find();
    }

    async getById(id: string): Promise<Publication> {
        const result = await this.adminModel.findById(id).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async create(admin: Publication): Promise<Publication> {
        const result = new this.adminModel(admin);
        return await result.save();
    }

    async update(id: string, updateBody: any): Promise<Publication> {
        const result = await this.adminModel.findByIdAndUpdate(id, updateBody, { new: true }).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async delete(id: string): Promise<Publication> {
        const result = await this.adminModel.findByIdAndDelete(id).exec();
        if (!result) {
        throw new NotFoundException('User not found');
        }
        return result;
    }
}
