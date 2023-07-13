import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/Auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

@Module({
  imports:[AuthModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController]
})

export class UserModule {}
