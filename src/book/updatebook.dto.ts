import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto{

    @IsOptional()
    @ApiProperty()
    name:string;

    @IsOptional()
    @ApiProperty()
    author:string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    description:string;
}

