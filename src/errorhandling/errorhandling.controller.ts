import { Controller, Get ,BadRequestException, UseFilters} from '@nestjs/common';
// import { TestException } from './test.exception';
import { TestCustomExceptionFilter } from './testCustom.exceptionFilter';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Errors')
@Controller('error')
export class ErrorhandlingController {
  
    @Get()
    @UseFilters(TestCustomExceptionFilter)
    testError(){
        // throw new TestException();
        throw new BadRequestException();
    }

}
