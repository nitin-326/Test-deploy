import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signUp(@Body() userDto: UserDto) {
    return this.userService.signup(userDto);
  }

  @Post('login')
  login(@Body() userDto: UserDto) {
    return this.userService.login(userDto);
  }
}
