import { Injectable, NotFoundException, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Book } from './book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/entity/user.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private bookRepository: Repository<BookEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async addBook(book: Book, userId: string) {
    const { name, author, description } = book;

    const user = await this.userRepository.findOneBy({ id: userId });
    const myBook = new BookEntity();

    myBook.name = name;
    myBook.author = author;
    myBook.description = description;
    myBook.user = user;

    try {
      this.bookRepository.save(myBook);
      return { message: 'Book added successfully' };
    } catch (err) {
      return { message: err };
    }
  }

  async findAllBook(userId: string) {
    const data = await this.bookRepository.find({
      where: { user: { id: userId } },
    });

    if (data) {
      return data;
    }
    throw new NotFoundException('No Book found');
  }

  async updateBook(book: Book, bookId: string, userId: string) {
    const myBook = await this.bookRepository.find({
      where: { user: { id: userId } },
    });

    const foundBook = myBook.find((book) => book.id === bookId);

    if (foundBook) {
      foundBook.name = book.name;
      foundBook.description = book.description;
      foundBook.author = book.author;
      const data = await this.bookRepository.save(foundBook);
      return data;
    }
    throw new NotFoundException('Unauthorized User');
  }

  async deleteBook(bookId: string, userId: string) {
    const myBook = await this.bookRepository.find({
      where: { user: { id: userId } },
    });

    const foundBook = myBook.find((book) => book.id === bookId);

    if (foundBook) {
      return await this.bookRepository.delete(bookId);
    }
    throw new NotFoundException('Unauthorized User');
  }
}
