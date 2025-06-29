import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './interfaces/administrators.interfaces';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdministratorsService {

    constructor(@InjectModel('Admin')private readonly adminModel: Model<Admin>){}

    async getAll(){
        return this.adminModel.find();
    }

    async getById(id: string): Promise<Admin> {
        const result = await this.adminModel.findById(id).exec();
        if (!result) {
          throw new NotFoundException('Admin not found');
        }
        return result;
    }

    async create(admin: Admin): Promise<Admin> {
        const hashedPassword = await bcrypt.hash(admin.password, 10);
        const newAdmin = new this.adminModel({ ...admin, password: hashedPassword });
        return newAdmin.save();
    }

    async update(id: string, updateBody: any): Promise<Admin> {
        const hashedPassword = await bcrypt.hash(updateBody.password, 10);
        updateBody.password = hashedPassword;
        const result = await this.adminModel.findByIdAndUpdate(id, updateBody, { new: true }).exec();
        if (!result) {
          throw new NotFoundException('Admin not found');
        }
        return result;
    }

    async delete(id: string): Promise<Admin> {
        const result = await this.adminModel.findByIdAndDelete(id).exec();
        if (!result) {
        throw new NotFoundException('Admin not found');
        }
        return result;
    }
}
