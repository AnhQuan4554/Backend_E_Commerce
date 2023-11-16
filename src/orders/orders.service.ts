/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Order } from './orders.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Carts } from './cart.entity';
import { CreateOrderDto } from './dto/creatOrder.dto';
import { CreateCartDto } from './dto/creatCarts.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private OrderRepository: Repository<Order>,
    @InjectRepository(Carts)
    private CartsRepository: Repository<Carts>,
  ) {}
  async getAllOrder() {
    const res = await this.OrderRepository.find();
    console.log('get Success');
    // console.log('all orderss', res);
    return res;
  }
  async getAllCarts() {
    const res = await this.CartsRepository.find();
    console.log('get Success');
    return res;
  }
  async creatOrder(creatOrder: CreateOrderDto) {
    const result = await this.OrderRepository.save(creatOrder);
    // console.log('result when creat', result);
    return result;
  }
  async creatCarts(creatCart: CreateCartDto) {
    const result = await this.CartsRepository.save(creatCart);
    // console.log('result when creat Cart', result);
    return result;
  }
}
