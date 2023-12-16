/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Order } from './orders.entity';
import { Any, FindManyOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Carts } from './cart.entity';
import { CreateOrderDto } from './dto/creatOrder.dto';
import { CreateCartDto } from './dto/creatCarts.dto';
import axios from 'axios';

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
    console.log('get ALl Order Success');
    // console.log('all orderss', res);
    return res;
  }
  async getAllCarts(email: String) {
    const options: FindManyOptions<Carts> = {
      where: { email } as any, // Điều kiện tìm kiếm dựa trên email
    };
    const res = await this.CartsRepository.find(options);
    console.log('get All Carts Success');
    return res;
  }
  async getAllOrdersByEmail(email: String) {
    const options: FindManyOptions<Order> = {
      where: { email } as any, // Điều kiện tìm kiếm dựa trên email
    };
    const res = await this.OrderRepository.find(options);
    console.log('data getAllOrdersByEmail', res);

    return res;
  }
  async creatOrder(creatOrder: CreateOrderDto) {
    const result = await this.OrderRepository.save(creatOrder);
    // console.log('result when creat', result);
    return result;
  }
  async creatCarts(creatCart: CreateCartDto) {
    const result = await this.CartsRepository.save(creatCart);
    return result;
  }
  async deleteCarts(id: number) {
    const result = await this.CartsRepository.delete({ id });
    // console.log('result when creat Cart', result);
    return result;
  }
  async getLocationDetail(location) {
    const config = {
      method: 'get',
      url: `https://api.opencagedata.com/geocode/v1/json?key=6bb92087c9fc4c5b95bd7063dddab616&q=${location.toString()}`,
    };
    const response = await axios.request(config);

    if (response.data.results.length > 0) {
      const location = response.data.results[0].geometry;
      const latitude = location.lat;
      const longitude = location.lng;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      return {
        latitude,
        longitude,
      };
    } else {
      console.error('Geocoding failed. No results found.');
      return {
        latitude: 0,
        longitude: 0,
      };
    }
  }
  async creatOptimoroute(data: any) {
    const raw_data = {
      orders: data,
    };
    const responsePost = await axios.post(
      `https://api.optimoroute.com/v1/create_or_update_orders?key=369f87db53be71e8fccc90ee1b488c3eey6pC9UObsI`,
      raw_data,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
    console.log(raw_data);
    console.log(responsePost.data);
  }
}
