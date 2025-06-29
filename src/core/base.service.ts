import { Document, Model } from 'mongoose';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

export abstract class BaseService<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  findAll(filter = {}) {
    try {
      console.log(filter)
      return this.model.find(filter).exec();
    } catch (error) {
      throw new NotFoundException('Item not found');
    }
  }

  findOne(id: string) {
    try {
      return this.model.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Item not found');
    }
  }

  create(data: Partial<T>) {
    try {
      return this.model.create(data);
    } catch (error) {
      throw new NotFoundException('Item not found');
    }
  }

  async createUser(data: Partial<T>) {
    try { 
      const { emailAddress, password, verifyPassword } = data as any;
      const user = await this.model.findOne({ emailAddress });
      if (user) {
        throw new BadRequestException('User already exists');
      }

      if (password !== verifyPassword) {
        throw new BadRequestException('Passwords do not match');
      }
            
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new this.model({ ...data, password: hashedPassword });
      return await newUser.save();
    } catch (error) {
      throw new NotFoundException('Item not found');
    }
  }

  update(id: string, data: Partial<T>) {
    try {
      return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    } catch (error) {
      throw new NotFoundException('Item not found');
    }
  }

  delete(id: string) {
    try {
      return this.model.findByIdAndDelete(id).exec();
    } catch (error) {
      throw new NotFoundException('Item not found');
    }
  }
}
