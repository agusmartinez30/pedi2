import { Model, Document } from 'mongoose';

export async function createHelper<T extends Document>(
  model: Model<T>,
  createDto: any,
): Promise<T> {
  const newItem = new model(createDto);
  return newItem.save();
}
