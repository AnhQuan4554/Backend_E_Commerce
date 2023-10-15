import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Connection } from 'typeorm';

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
}
