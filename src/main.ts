import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import *as path from 'path';
import { BookMiddleware } from './book/middleware/book.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(path.join(__dirname, '../uploads'));

  const config = new DocumentBuilder()
    .setTitle('Swagger')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .addBearerAuth()
    .build();

    app.useGlobalPipes(new ValidationPipe);

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  // app.use(BookMiddleware)

  await app.listen(3000);
}
bootstrap();
