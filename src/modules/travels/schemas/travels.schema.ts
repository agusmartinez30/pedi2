import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TravelDocument = Travel & Document;

const GeoPointSchema = new MongooseSchema({
    type: {
        type: String,
        enum: ['Point'],
    },
    coordinates: {
        type: [Number],
    }
}, { _id: false });

@Schema({ timestamps: true })
export class Travel {
    id: string;

    @Prop({ type: Types.ObjectId, ref: 'Orders', required: true })
    orderId: Types.ObjectId;

    @Prop({ 
        type: String,
        enum: ['pending', 'in_progress', 'completed', 'cancelled'],
        default: 'pending'
    })
    status: string;

    @Prop({ type: Date })
    startTime: Date;

    @Prop({ type: Date })
    endTime: Date;

    @Prop({ type: Number })
    distance: number;

    @Prop({ type: GeoPointSchema })
    currentPosition: typeof GeoPointSchema;

    createdAt: Date;
}

export const TravelsSchema = SchemaFactory.createForClass(Travel);

TravelsSchema.index({ origin: '2dsphere' });
TravelsSchema.index({ destination: '2dsphere' });
