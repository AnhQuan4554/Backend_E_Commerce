import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CreatProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private connection: Connection,
  ) {}

  @Get()
  getHello(): string {
    return 'okokUsers';
  }
  @Post('creat-product')
  async creatProduct(@Body() createProduct: CreatProductDto) {
    const res = this.productService.creatProduct(createProduct);
    return res;
  }
}
