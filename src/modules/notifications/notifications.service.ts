import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from './interfaces/notifications.interfaces';

@Injectable()
export class NotificationsService {

    constructor(@InjectModel('Notification')private readonly adminModel: Model<Notification>){}

    async getAll(){
        return this.adminModel.find();
    }

    async getById(id: string): Promise<Notification> {
        const result = await this.adminModel.findById(id).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async create(admin: Notification): Promise<Notification> {
        const result = new this.adminModel(admin);
        return await result.save();
    }

    async update(id: string, updateBody: any): Promise<Notification> {
        const result = await this.adminModel.findByIdAndUpdate(id, updateBody, { new: true }).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async delete(id: string): Promise<Notification> {
        const result = await this.adminModel.findByIdAndDelete(id).exec();
        if (!result) {
        throw new NotFoundException('User not found');
        }
        return result;
    }
}
