/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/creatOrder.dto';
import { CreateCartDto } from './dto/creatCarts.dto';
import { NotifycationService } from 'src/notifycation/notifycation.service';

@Controller('order')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly notifycationService: NotifycationService,
  ) {}

  @Get()
  async getAllOrder() {
    const res = await this.ordersService.getAllOrder();
    return res;
  }
  @Get('carts')
  async getAllCart() {
    const res = await this.ordersService.getAllCarts();
    return res;
  }
  @Post('creat-order')
  async creatOrder(@Body() createOrderDto: CreateOrderDto) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Lưu ý: Tháng bắt đầu từ 0
    const year = today.getFullYear();
    const currentDate = `${day}/${month}/${year}`;
    console.log(currentDate);
    console.log(createOrderDto);
    const res = await this.ordersService.creatOrder(createOrderDto);
    createOrderDto['qty'] = 1;
    createOrderDto['dataTime'] = currentDate;
    const resNoti = await this.notifycationService.create(
      createOrderDto as any,
    );
  }
  @Post('creat-cart')
  async creatCart(@Body() createCartDto: CreateCartDto) {
    const res = this.ordersService.creatCarts(createCartDto);
  }
}
