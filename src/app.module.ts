import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BookModule } from './book/book.module';
import { ErrorhandlingModule } from './errorhandling/errorhandling.module';


@Module({
  imports: [BookModule, ErrorhandlingModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
