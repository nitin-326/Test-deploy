import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Books')
@Controller('book')
export class BookController {

    constructor(private bookService:BookService){}

    @Get('/')
    findAllBook(){
        return this.bookService.findAllBook();
    }

    @Post('/')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    addBook(@Body() book : Book){
        return this.bookService.addBook(book);
    }

    @Put('/')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    updateBook(@Body() book : Book){
        return this.bookService.updateBook(book);
    }

    @Delete('/:id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    Book(@Param('id') id : number){
        return this.bookService.deleteBook(id);
    }

}
