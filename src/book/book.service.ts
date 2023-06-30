import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {

    addBook():string{
        return "Add Your book here";
    }

    findAllBook():string{
        return "your all book";
    }

    updateBook():string{
        return "book is updated";
    }

    deleteBook():string{
        return "your book is deleted";
    }

}
