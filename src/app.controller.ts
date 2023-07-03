import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

    @Get()
    appFun(){
        return "This is App Entry Controller";
    }
}
