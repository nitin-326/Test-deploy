import { IsString, MaxLength, MinLength, IsNotEmpty, IsNumber } from "class-validator";

import { ApiProperty } from '@nestjs/swagger';

export class Book{

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    author:string;

    @IsString()
    @MaxLength(300)
    @ApiProperty()
    description:string;
}

