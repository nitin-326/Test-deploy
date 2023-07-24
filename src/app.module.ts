import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Config} from '../config'
import { AuthModule } from './Auth/auth.module';


@Module({
  imports: [BookModule,UserModule,TypeOrmModule.forRoot(Config),AuthModule],
  controllers: [AppController],
  providers: [],
})

export class AppModule {}
