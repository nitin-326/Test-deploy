import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class User{

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    id:string;

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