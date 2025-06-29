import { Model, Document } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

export async function deleteHelper<T extends Document>(
  model: Model<T>,
  id: string,
): Promise<T> {
  const deletedItem = await model.findByIdAndDelete(id).exec();
  if (!deletedItem) {
    throw new NotFoundException('Item not found');
  }
  return deletedItem;
}
