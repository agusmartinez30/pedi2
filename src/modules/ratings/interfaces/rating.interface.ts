import { Document, Types } from 'mongoose';

export interface Rating extends Document {
    userId: Types.ObjectId;
    orderId: Types.ObjectId;
    rating: number;
    comment?: string;
    createdAt: Date;
}
