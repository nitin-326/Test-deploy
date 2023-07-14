import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { AuthModule } from 'src/Auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import Config from '../../config';
import { BookEntity } from './book.entity';
import { UserModule } from 'src/user/user.module';
import { UserEntity } from 'src/user/entity/user.entity';

@Module({
  imports:[AuthModule,TypeOrmModule.forFeature([BookEntity]),TypeOrmModule.forFeature([UserEntity]),UserModule],
  controllers: [BookController],
  providers: [BookService]
})

export class BookModule{
}
