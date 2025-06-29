import { Schema as MongooseSchema } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type NotificationsDocument = Notifications & Document;

@Schema({ timestamps: true })
export class Notifications {
    id: string;
    @Prop({ required: true, default: true })
    enabled: boolean;
    @Prop({ required: true })
    title: string;
    @Prop({ required: true })
    description: string;
    @Prop({ required: true })
    type: string;
    @Prop({ required: true })
    user: Types.ObjectId;
    @Prop({ required: true })
    publication: Types.ObjectId;
    @Prop({ default: Date.now })
    createdAt: Date;
}

export const NotificationsSchema = SchemaFactory.createForClass(Notifications);