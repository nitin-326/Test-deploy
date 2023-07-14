import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { BookEntity } from 'src/book/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('Users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  username: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  password: string;

  boforeInsert() {
    this.id = uuidv4;
  }

  @OneToMany(() => BookEntity, book => book.user)
  book : BookEntity[]
}
