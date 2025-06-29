import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type RatingDocument = Rating & Document;

@Schema({ timestamps: true })
export class Rating {
    id: string;

    @Prop({ type: Types.ObjectId, ref: 'Users', required: true })
    userId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Users', required: true })
    driverId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Orders', required: true })
    orderId: Types.ObjectId;

    @Prop({ type: Number, required: true, min: 1, max: 5 })
    rating: number;

    @Prop({ type: String })
    comment: string;

    createdAt: Date;
}

export const RatingsSchema = SchemaFactory.createForClass(Rating);
