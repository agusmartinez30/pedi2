import { Model, Document } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

export async function getByIdHelper<T extends Document>(
  model: Model<T>,
  id: string,
): Promise<T> {
  const item = await model.findById(id).exec();
  if (!item) {
    throw new NotFoundException('Item not found');
  }
  return item;
}
