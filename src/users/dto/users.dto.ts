import { IsEmail, IsNotEmpty } from "class-validator";

export class createUserDTO {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    phoneNumber: string;

    @IsEmail()
    emailAddress: string;

    @IsNotEmpty()
    password: string

}