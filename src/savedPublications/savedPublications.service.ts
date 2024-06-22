import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { savedPublication } from './interfaces/savedPublications.interfaces';

@Injectable()
export class savedPublicationsService {

    constructor(@InjectModel('savedPublication')private readonly adminModel: Model<savedPublication>){}

    async getAll(){
        return this.adminModel.find();
    }

    async getById(id: string): Promise<savedPublication> {
        const result = await this.adminModel.findById(id).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async create(admin: savedPublication): Promise<savedPublication> {
        const result = new this.adminModel(admin);
        return await result.save();
    }

    async update(id: string, updateBody: any): Promise<savedPublication> {
        const result = await this.adminModel.findByIdAndUpdate(id, updateBody, { new: true }).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async delete(id: string): Promise<savedPublication> {
        const result = await this.adminModel.findByIdAndDelete(id).exec();
        if (!result) {
        throw new NotFoundException('User not found');
        }
        return result;
    }
}
