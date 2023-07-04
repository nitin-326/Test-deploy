import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Books')
@Controller('book')
export class BookController {

    constructor(private bookService:BookService){}

    @Get('/')
    findAllBook(){
        return this.bookService.findAllBook();
    }

    @Post('/')
    addBook(@Body() book : Book){
        return this.bookService.addBook(book);
    }

    @Put('/')
    updateBook(@Body() book : Book){
        return this.bookService.updateBook(book);
    }

    @Delete('/:id')
    Book(@Param('id') id : string){
        return this.bookService.deleteBook(id);
    }

}
