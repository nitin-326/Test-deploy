import { Injectable } from '@nestjs/common';
import { Book } from './book.dto';

@Injectable()
export class BookService {
  public books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
    return 'book is added';
  }

  findAllBook() {
    return this.books;
  }

  updateBook(book: Book) {
    let index = this.books.findIndex((cbook) => {
      return cbook.id == book.id;
    });
    this.books[index] = book;
    return 'book is updated';
  }

  deleteBook(bookId: number) {
    this.books = this.books.filter((cbook) => {
      return bookId != cbook.id;
    });
    return 'your book is deleted';
  }
}
