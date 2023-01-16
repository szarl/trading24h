import Address from "./Address";
import { IsNumber, IsOptional, IsEmail, IsPhoneNumber, IsNotEmpty, IsDate, MinLength } from 'class-validator';

export default class User {

    @IsOptional()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    surname: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    phoneNumber: string;

    @IsDate()
    dob: Date;

    @MinLength(8)
    password: string;

    address: Address;

    constructor (user?: Partial<User>) {
        if (user) {
            Object.assign(this, user);
        }
    }
}