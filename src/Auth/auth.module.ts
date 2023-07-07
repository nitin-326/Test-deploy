import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [PassportModule ,JwtModule.register({
        secret:"my-secret-key",
        signOptions:{
            expiresIn:'1h'
        }
    })],
    providers: [AuthService,JwtStrategy],
    controllers: [],
    exports: [AuthService]
})

export class AuthModule {};