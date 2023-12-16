/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Connection } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { UserLogin } from './dto/userLogin.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private connection: Connection,
  ) {}
  @Get('/:email')
  async getUser(@Param('email') email: string) {
    const user = await this.userService.findAddressByEmail(email);
  }
  @Post('check-user')
  async CheckUserLogin(@Body() userLogin: any) {
    const resUserLogin = await this.userService.findOne(userLogin);
    if (!resUserLogin) {
      throw new HttpException(
        { message: 'User not found' },
        HttpStatus.NOT_FOUND,
      );
    }

    console.log('resUserLogin++', resUserLogin);
    return resUserLogin;
  }
  @Get('check')
  async checkDatabaseConnection(): Promise<string> {
    if (await this.connection.isConnected) {
      return 'Kết nối cơ sở dữ liệu hoạt động.';
    } else {
      return 'Lỗi kết nối cơ sở dữ liệu.';
    }
  }

  @Post('creat-user')
  async creatUser(@Body() createUserDto: CreateUserDto) {
    const res = this.userService.creatUser(createUserDto);
    return res;
  }
}
