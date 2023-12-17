/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/user.dto';
import { UserLogin } from './dto/userLogin.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async creatUser(creatUser: CreateUserDto) {
    const result = await this.usersRepository.save(creatUser);
    console.log('result when creat', result);
    return result;
  }
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findAddressByEmail(email: string) {
    const res = this.usersRepository.findOne({ where: { email } });
    console.log((await res).address);
    return (await res).address;
  }
  async findOne(userLogin: UserLogin) {
    const { email, password } = userLogin;
    return this.usersRepository.findOneBy({ email, password });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
