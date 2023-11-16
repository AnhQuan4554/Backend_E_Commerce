import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  async getAllProduct() {
    const res = await this.productService.findAll();
    console.log('product list', res);
    return res;
  }
  @Get(':id')
  async getDetail(@Param('id') id: number) {
    const res = await this.productService.findOne(id);
    console.log('product list', res);
    return res;
  }
  @Post('creat-product')
  async creatProduct(@Body() createProduct: CreatProductDto) {
    const res = this.productService.creatProduct(createProduct);
    return res;
  }
}
