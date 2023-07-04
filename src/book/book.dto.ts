import { IsString, MaxLength, MinLength, IsNotEmpty } from "class-validator";

import { ApiProperty } from '@nestjs/swagger';

export class Book{

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    id:string;

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

