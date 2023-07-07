import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './user.entity';
import { LoginDto } from './user.dto';
import { AuthService } from 'src/Auth/auth.service';



@Injectable()
export class UserService {
 
    constructor(private authService: AuthService){}

    public users : User[] = [{
        id: '1',
        username: 'Nitin',
        email: 'nitin@gmail.com',
        password:'hi@nitin'
    }];

    // signup(){
    //     return "User sign up";
    // }

    login(loginDto:LoginDto){

        const myUSer = this.users.find(user => user.username === loginDto.username);

        if(!myUSer){
             throw new UnauthorizedException()
        }

        if(myUSer.password == loginDto.password){
            const token = this.authService.generateToken(loginDto);
            // console.log(token)
            return token;
        }

        throw new UnauthorizedException();

    }
}
