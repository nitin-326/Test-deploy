import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Patch,
  UseGuards,
  Req,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.dto';
import { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UpdateBookDto } from './updatebook.dto';

@ApiTags('Books')
@Controller('book')
@UseGuards(AuthGuard('jwt'))
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/')
  @ApiBearerAuth()
  async findAllBook(@Req() req: Request) {
    const userId = req.body.userId;
    return await this.bookService.findAllBook(userId);
  }

  @Post('/')
  @ApiBearerAuth()
  addBook(@Body() book: Book, @Req() req: Request) {
    const userId = req.body.userId;
    return this.bookService.addBook(book, userId);
  }

  @Patch('/:id')
  @ApiBearerAuth()
  updateBook(
    @Body() book: UpdateBookDto,
    @Param('id') bookId: string,
    @Req() req: Request,
  ) {
    const userId = req.body.userId;  
    return this.bookService.updateBook(book, bookId, userId);
  }

  @Delete('/:id')
  @ApiBearerAuth()
  Book(@Param('id') id: string,@Req() req: Request) {
    const userId = req.body.userId; 
    return this.bookService.deleteBook(id,userId);
  }
}
