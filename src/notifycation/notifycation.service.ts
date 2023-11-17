/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateNotifycationDto } from './dto/create-notifycation.dto';
import { UpdateNotifycationDto } from './dto/update-notifycation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notifycation } from './entities/notifycation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotifycationService {
  constructor(
    @InjectRepository(Notifycation)
    private notifycationRepository: Repository<Notifycation>,
  ) {}
  async create(createNotifycationDto: CreateNotifycationDto) {
    const result = await this.notifycationRepository.save(
      createNotifycationDto,
    );
    console.log('result when creat Notufy', result);
    return result;
  }

  async findAll() {
    const res = await this.notifycationRepository.find();

    return res;
  }

  async findOne(id: number) {
    const res = await this.notifycationRepository.findOneBy({ id });
    return res;
  }

  update(id: number, updateNotifycationDto: UpdateNotifycationDto) {
    return `This action updates a #${id} notifycation`;
  }

  remove(id: number) {
    return `This action removes a #${id} notifycation`;
  }
}
