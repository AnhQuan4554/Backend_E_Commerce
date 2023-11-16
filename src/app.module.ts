/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { Product } from './product/product.entity';
import { Order } from './orders/orders.entity';
import { Carts } from './orders/cart.entity';
import { NotifycationModule } from './notifycation/notifycation.module';
import { Notifycation } from './notifycation/entities/notifycation.entity';
import { NotifycationService } from './notifycation/notifycation.service';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '100502',
      database: 'e_commerce',
      entities: [User, Product, Order, Carts, Notifycation],
      synchronize: true,
    }),
    CategoriesModule,
    ProductModule,
    OrdersModule,
    NotifycationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
