import { IsEmail, IsNotEmpty } from "class-validator";

export class createUserDTO {
    @IsNotEmpty()
    username: string;

    phoneNumber: string;

    @IsEmail()
    emailAddress: string;

    @IsNotEmpty()
    password: string

    role: string

    rating: number

    vehicleType: string

    licensePlate: string

    vehicleColor: string

    vehicleBrand: string

    vehicleModel: string

    vehicleYear: string

    vehiclePictures: string[]

    licensePictures: string[]

}