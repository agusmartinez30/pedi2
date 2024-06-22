import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './interfaces/administrators.interfaces';

@Injectable()
export class AdministratorsService {

    constructor(@InjectModel('Admin')private readonly adminModel: Model<Admin>){}

    async getAll(){
        return this.adminModel.find();
    }

    async getById(id: string): Promise<Admin> {
        const result = await this.adminModel.findById(id).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async create(admin: Admin): Promise<Admin> {
        const result = new this.adminModel(admin);
        return await result.save();
    }

    async update(id: string, updateBody: any): Promise<Admin> {
        const result = await this.adminModel.findByIdAndUpdate(id, updateBody, { new: true }).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async delete(id: string): Promise<Admin> {
        const result = await this.adminModel.findByIdAndDelete(id).exec();
        if (!result) {
        throw new NotFoundException('User not found');
        }
        return result;
    }
}
