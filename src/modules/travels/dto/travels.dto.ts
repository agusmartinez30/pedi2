import { IsString, IsNumber, IsMongoId, IsEnum, IsOptional, IsDate, Min, Max } from 'class-validator';

export class CreateTravelDTO {
    @IsMongoId()
    readonly userId: string;

    @IsMongoId()
    readonly driverId: string;

    @IsMongoId()
    readonly orderId: string;

    @IsEnum(['pending', 'in_progress', 'completed', 'cancelled'])
    readonly status: string;

    @IsOptional()
    @IsDate()
    readonly startTime?: Date;

    @IsOptional()
    @IsDate()
    readonly endTime?: Date;

    @IsNumber()
    readonly distance: number;

    @IsNumber()
    readonly price: number;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly rating?: number;

    @IsOptional()
    @IsString()
    readonly comments?: string;

    readonly origin: {
        type: "Point",
        coordinates: [number, number]
    };

    readonly destination: {
        type: "Point",
        coordinates: [number, number]
    };
}

export class UpdateTravelDTO {
    @IsOptional()
    @IsEnum(['pending', 'in_progress', 'completed', 'cancelled'])
    readonly status?: string;

    @IsOptional()
    @IsDate()
    readonly startTime?: Date;

    @IsOptional()
    @IsDate()
    readonly endTime?: Date;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(5)
    readonly rating?: number;

    @IsOptional()
    @IsString()
    readonly comments?: string;
}
