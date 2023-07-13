import { IsString, MaxLength, MinLength, IsNotEmpty, IsNumber } from "class-validator";

import { ApiProperty } from '@nestjs/swagger';

export class Book{

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    id:number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name:string;

    @IsString()
    @ApiProperty()
    author:string;

    @IsString()
    @MinLength(10)
    @MaxLength(300)
    @ApiProperty()
    description:string;

}

