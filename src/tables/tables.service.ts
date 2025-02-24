import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Table } from './interfaces/tables.interfaces';

@Injectable()
export class TablesService {

    constructor(@InjectModel('Tables')private readonly tableModel: Model<Table>){}

    async getAll(){
        return this.tableModel.find();
    }

    async getById(id: string): Promise<Table> {
        const result = await this.tableModel.findById(id).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async create(admin: Table): Promise<Table> {
        const result = new this.tableModel(admin);
        return await result.save();
    }

    async update(id: string, updateBody: any): Promise<Table> {
        const result = await this.tableModel.findByIdAndUpdate(id, updateBody, { new: true }).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async delete(id: string): Promise<Table> {
        const result = await this.tableModel.findByIdAndDelete(id).exec();
        if (!result) {
        throw new NotFoundException('User not found');
        }
        return result;
    }
}
