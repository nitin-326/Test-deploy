import { TypeOrmModuleOptions } from "@nestjs/typeorm";


const Config : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'book-database',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
}

export default Config;