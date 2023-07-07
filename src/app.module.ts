import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BookModule } from './book/book.module';
import { ErrorhandlingModule } from './errorhandling/errorhandling.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [BookModule, ErrorhandlingModule, FileUploadModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
