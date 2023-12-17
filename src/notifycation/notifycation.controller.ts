/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotifycationService } from './notifycation.service';
import { CreateNotifycationDto } from './dto/create-notifycation.dto';
import { UpdateNotifycationDto } from './dto/update-notifycation.dto';

@Controller('notifycation')
export class NotifycationController {
  constructor(private readonly notifycationService: NotifycationService) {}

  @Post()
  async create(@Body() createNotifycationDto: CreateNotifycationDto) {
    console.log('object', createNotifycationDto);
    const res = this.notifycationService.create(createNotifycationDto);
  }

  @Get('/:email')
  findAll(@Param('email') email: String) {
    return this.notifycationService.findAll(email);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notifycationService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNotifycationDto: UpdateNotifycationDto) {
  //   return this.notifycationService.update(+id, updateNotifycationDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notifycationService.remove(+id);
  }
}
