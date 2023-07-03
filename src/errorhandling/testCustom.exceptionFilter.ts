import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";


export class TestCustomExceptionFilter implements ExceptionFilter{

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        response.status(status).json({
            statuscode : status,
            timestamp:new Date().toISOString(),
            url: request.url,
            host:request.get("host")
        })

    }
   
}