import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
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
}
