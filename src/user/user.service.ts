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

    return this.userRepository.save(myDto);
  }

  async login(userDto: UserDto) {
    const user = await this.userRepository.findOneBy({
      username: userDto.username,
    });

    if (!user) {
      throw new UnauthorizedException("user is not registered");
    }

    const isMatch = bcrypt.compare(userDto.password,user.password);

    if (isMatch) {
      const token = await this.authService.generateToken({username:user.username ,id:user.id});
      return token;
    }

    throw new UnauthorizedException("Incorrect Login Details");
  }
}
