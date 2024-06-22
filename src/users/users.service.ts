import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/users.interfaces';
import * as bcrypt from 'bcrypt'
import { createUserDTO } from './dto/users.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly model: Model<User>){}

    async getAll(){
        return this.model.find();
    }

    async getById(id: string): Promise<User> {
        console.log(id);
        
        const result = await this.model.findById(id).exec();
        console.log(result);
        
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async create(createUserDto: createUserDTO): Promise<User> {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const newUser = new this.model({ ...createUserDto, password: hashedPassword });
      return newUser.save();
    }

    async update(id: string, updateBody: any): Promise<User> {
        const result = await this.model.findByIdAndUpdate(id, updateBody, { new: true }).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async delete(id: string): Promise<User> {
        const result = await this.model.findByIdAndDelete(id).exec();
        if (!result) {
        throw new NotFoundException('User not found');
        }
        return result;
    }
}
