import { IsString } from "class-validator";
import { UserEntity } from "src/user/entity/user.entity";
import { Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity('Books')
export class BookEntity{
    

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @IsString()
    @Column()
    name:string;

    @IsString()
    @Column()
    author:string;

    @IsString()
    @Column()
    description:string;

    InsertBefore(){
        this.id = uuidv4();
    }

    @ManyToOne(() => UserEntity, user => user.book)
    user:UserEntity;

}