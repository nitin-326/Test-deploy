import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class BookMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
      const token = authorizationHeader.substring(7); // Extract the token excluding "Bearer "
      const decodedToken = this.jwtService.decode(token);

      if (
        decodedToken &&
        typeof decodedToken === 'object' &&
        'id' in decodedToken
      ) {
        const userId = decodedToken.id;
        
        req.body.userId = userId;
      }
    }

    next();
  }
}
