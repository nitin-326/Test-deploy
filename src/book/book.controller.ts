import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

    constructor(private bookService:BookService){}

    @Get()
    findAllBook():string{
        return this.bookService.findAllBook();
    }

    @Post()
    addBook():string{
        return this.bookService.addBook();
    }

    @Put()
    updateBook():string{
        return this.bookService.updateBook();
    }

    @Delete()
    Book():string{
        return this.bookService.deleteBook();
    }

}
