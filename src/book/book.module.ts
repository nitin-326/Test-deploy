import {
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { AuthModule } from 'src/Auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';
import { UserModule } from 'src/user/user.module';
import { UserEntity } from 'src/user/entity/user.entity';
import { BookMiddleware } from './middleware/book.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([BookEntity, UserEntity]),
    UserModule,
    JwtModule.register({
      secret: 'my-secret-key',
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BookMiddleware)
      .forRoutes('*');
  }
}
