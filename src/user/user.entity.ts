import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class User{

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    id:number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    username:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password:string;
}