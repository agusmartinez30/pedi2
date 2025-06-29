import { IsEmail, IsNotEmpty } from "class-validator";

export class loginAuthDto {
    @IsNotEmpty()
    @IsEmail()
    emailAddress: string;

    @IsNotEmpty()
    password: string;
}