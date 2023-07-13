import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class UserDto{

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    username:string

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    password:string
}