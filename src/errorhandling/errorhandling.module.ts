import { Module } from '@nestjs/common';
import { ErrorhandlingController } from './errorhandling.controller';

@Module({
  controllers: [ErrorhandlingController]
})
export class ErrorhandlingModule {}
