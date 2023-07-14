import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';


@ApiTags('Books')
@Controller('book')
export class BookController {

    constructor(private bookService:BookService){}

    @Get('/:id')
    async findAllBook(@Param('id') userid:string){
        return await this.bookService.findAllBook(userid);
    }

    @Post('/:id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    addBook(@Body() book : Book,@Param('id') userId : string){
        return this.bookService.addBook(book,userId);
    }

    @Put('/:id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    updateBook(@Body() book : Book, @Param('id') id: string){
        return this.bookService.updateBook(book,id);
    }

    @Delete('/:id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    Book(@Param('id') id : string){
        return this.bookService.deleteBook(id);
    }

}
