import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import * as path from 'path';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

interface FileParms {
  filename: string;
}
 
@ApiTags('File Upload')
@Controller('upload')
export class FileUploadController {
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async upload() {
    return 'success';
  }

  @Get()
  getFile(@Res() res: Response, @Body() file: FileParms) {
    res.sendFile(path.join(__dirname, '../../uploads/' + file.filename));
  }
}
