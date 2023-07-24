import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { AuthService } from 'src/Auth/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private authService: AuthService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async signup(userDto: UserDto) {
    const username = userDto.username;
    const password = userDto.password;
    const hashpassword = await bcrypt.hash(password, 12);

    const myDto = new UserDto();
    myDto.username = username;
    myDto.password = hashpassword;

    try {
      const response = this.userRepository.save(myDto);
      return { status: 200, message: 'User Registered Successfully' };
    } catch (err) {
      return { message: err };
    }
  }

  async login(userDto: UserDto) {
    try {
      const user = await this.userRepository.findOneBy({
        username: userDto.username,
      });

      if (!user) {
        return { status: 404, message: 'Invalid Username details' };
      }

      const isMatch = await bcrypt.compare(userDto.password, user.password);

      if (isMatch) {
        const token = await this.authService.generateToken({
          username: user.username,
          id: user.id,
        });
        return { token: token, status:200, message: 'User Logged in successfully' };
      }
      return { status: 404, message: 'Invalid Password' };
    } catch (err) {
      return { status: 404, message: 'Invalid Login details' };
    }
  }
}
