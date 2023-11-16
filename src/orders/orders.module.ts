/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './orders.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carts } from './cart.entity';
import { NotifycationService } from 'src/notifycation/notifycation.service';
import { NotifycationModule } from 'src/notifycation/notifycation.module';
import { NotifycationController } from 'src/notifycation/notifycation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Carts]), NotifycationModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
