import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Connection } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private connection: Connection,
  ) {}

  @Get()
  getHello(): string {
    return 'okokUsers';
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
