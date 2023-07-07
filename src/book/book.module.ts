import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { AuthModule } from 'src/Auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [BookController],
  providers: [BookService]
})

export class BookModule{
}
