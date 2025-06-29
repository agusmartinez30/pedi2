import { IsNotEmpty, IsNumber, IsString, IsOptional, Min, Max } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateRatingDto {
    @IsNotEmpty()
    userId: Types.ObjectId;

    @IsNotEmpty()
    orderId: Types.ObjectId;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(5)
    rating: number;

    @IsOptional()
    @IsString()
    comment?: string;
}