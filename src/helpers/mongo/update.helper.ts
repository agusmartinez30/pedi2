import { Model, Document } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

export async function updateHelper<T extends Document>(
  model: Model<T>,
  id: string,
  updateDto: any,
): Promise<T> {
  const updatedItem = await model
    .findByIdAndUpdate(id, updateDto, { new: true })
    .exec();
  if (!updatedItem) {
    throw new NotFoundException('Item not found');
  }
  return updatedItem;
}
