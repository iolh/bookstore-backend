import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  register(registerUserDto: RegisterUserDto) {
    console.log(registerUserDto);
    return 'This action adds a new user';
  }
}
