/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NotifycationService } from './notifycation.service';
import { NotifycationController } from './notifycation.controller';
import { Notifycation } from './entities/notifycation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [TypeOrmModule.forFeature([Notifycation])],
  controllers: [NotifycationController],
  providers: [NotifycationService],
  exports: [NotifycationService],
})
export class NotifycationModule {}
