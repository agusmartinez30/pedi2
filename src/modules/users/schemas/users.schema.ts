import { Schema as MongooseSchema } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    id: string;
    enabled: boolean;

    @Prop({ unique: true, required: true })
    username: string;

    @Prop({ required: true })
    fullName: string;

    @Prop({ unique: true, required: true })
    emailAddress: string;

    @Prop({ unique: true, required: true })
    phoneNumber: string;

    firstName: string;

    lastName: string;

    @Prop({ required: true })
    password: string;

    roles: string[];

    @Prop({min: 0, max: 5, default: 0 })
    rating: number;

    vehicleType: string;

    licensePlate: string;
    vehicleColor: string;
    vehicleBrand: string;
    vehicleModel: string;
    vehicleYear: string;
    vehiclePictures: string[];
    licensePictures: string[];

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);