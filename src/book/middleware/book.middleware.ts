import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class BookMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
      try {
        const token = authorizationHeader.substring(7);
        const valid = this.jwtService.verify(token);
        const decodedToken = this.jwtService.decode(token);

        if (
          decodedToken &&
          typeof decodedToken === 'object' &&
          'id' in decodedToken
        ) {
          const userId = decodedToken.id;
          req.body.userId = userId;
        }
      } catch (err) {
        throw new UnauthorizedException('Invalid or Experied Token');
      }
    }

    next();
  }
}
