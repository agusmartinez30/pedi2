import { Model, Document } from 'mongoose';

export async function getAllHelper<T extends Document>(model: Model<T>): Promise<T[]> {
  return model.find().exec();
}
