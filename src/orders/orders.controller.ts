/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/creatOrder.dto';
import { CreateCartDto } from './dto/creatCarts.dto';
import { NotifycationService } from 'src/notifycation/notifycation.service';
import { UserService } from 'src/users/user.service';

@Controller('order')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly notifycationService: NotifycationService,
    private readonly userService: UserService,
  ) {}

  @Get()
  async getAllOrder() {
    const res = await this.ordersService.getAllOrder();
    return res;
  }
  @Get('carts/:email')
  async getAllCart(@Param('email') email: String) {
    const res = await this.ordersService.getAllCarts(email);
    return res;
  }
  @Post('get-by-email/:email')
  async getAllOrderByEmail(@Param('email') email: String) {
    const res = await this.ordersService.getAllOrdersByEmail(email);
    return res;
  }
  @Post('creat-order')
  async creatOrder(@Body() createOrderDto: CreateOrderDto) {
    const today = new Date();
    const minutes = today.getSeconds();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Lưu ý: Tháng bắt đầu từ 0
    const year = today.getFullYear();
    const currentDate = `${month}/${day}/${year}`;
    const dayOptimoroute = `${year}-${month}-${day}`;
    createOrderDto['created_at'] = currentDate;
    const res = await this.ordersService.creatOrder(createOrderDto);
    // handle for notify
    createOrderDto['qty'] = 1;
    const resNoti = await this.notifycationService.create(
      createOrderDto as any,
    );
    // Handle For Oprimoroute and GEo
    const email = createOrderDto.email;
    const address = await this.userService.findAddressByEmail(email);
    const { latitude, longitude } =
      await this.ordersService.getLocationDetail(address);
    // creat optimoroute
    const orderNo = createOrderDto.email + minutes;
    const data = [
      {
        orderNo: orderNo,
        date: dayOptimoroute,
        duration: 44,
        type: 'D',
        location: {
          address: address,
          locationName: address,
          latitude: latitude,
          longitude: longitude,
        },
      },
    ];
    await this.ordersService.creatOptimoroute(data);
  }
  @Post('creat-cart')
  async creatCart(@Body() createCartDto: CreateCartDto) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const currentDate = `${month}/${day}/${year}`;
    createCartDto['dataTime'] = currentDate;
    const res = this.ordersService.creatCarts(createCartDto);
  }
  @Delete('delete-cart/:id')
  async deleteCart(@Param('id') id: number) {
    const res = this.ordersService.deleteCarts(id);
  }
  @Get('best-seller')
  async getOrderWithMaxQuantity() {
    const res = await this.ordersService.getOrderWithMaxQuantity();
    return res;
  }
}
