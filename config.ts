import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource, DataSourceOptions } from "typeorm";

export const Config : DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'book-database',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: ['dist/src/migration/*.js'],
}

const dataSource = new DataSource(Config)
export default dataSource;