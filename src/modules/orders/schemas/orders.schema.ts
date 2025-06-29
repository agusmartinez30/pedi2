import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
class GeoPointSchema {
  @Prop({ type: String })
    type: {
      type: String,
      enum: ['Point'],
      required: true
    }
  @Prop({ type: [Number], required: true })
    coordinates: {
      type: [Number],
      required: true
    }
}

@Schema({ timestamps: true })
export class Order {
    @Prop({ type: String })
    id: string
    
    @Prop({ type: Types.ObjectId, ref: 'Users', required: true })
    userId: Types.ObjectId

    @Prop({ type: Types.ObjectId, ref: 'Users' })
    driverId: Types.ObjectId

    @Prop({ type: String, required: true })
    title: {type: String, required: true}

    @Prop({ type: String, required: true })
    description: {type: String }

    @Prop({ type: GeoPointSchema, required: true })
    origin: GeoPointSchema

    @Prop({ type: GeoPointSchema, required: true })
    destination: GeoPointSchema

    @Prop({ type: Number, required: true })
    price: {type: Number, required: true}

    @Prop({ type: [String], required: true })
    pictures: [{type: String }]

    @Prop({ type: String, enum: ['pending', 'paid', 'cancelled'], default: 'pending' })
    status: { type: String, enum: ['pending', 'paid', 'cancelled'], default: 'pending' }

    @Prop({ type: Number, required: true })
    distance: {type: Number }

    @Prop({ type: Date, default: Date.now })
    createdAt: Date
}

export const OrdersSchema = SchemaFactory.createForClass(Order);
OrdersSchema.index({ origin: '2dsphere' });
OrdersSchema.index({ destination: '2dsphere' });