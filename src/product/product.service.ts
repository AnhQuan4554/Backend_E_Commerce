import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreatProductDto } from './dto/product.dto';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  getHello(): string {
    return 'Hello User!';
  }
  async creatProduct(creatProduct: CreatProductDto) {
    const result = await this.productRepository.save(creatProduct);
    console.log('result when creat', result);
    return result;
  }
  async findAll() {
    const products = await this.productRepository.find();
    return products;
  }

  async findOne(id: number) {
    const res = await this.productRepository.findOneBy({ id });
    return res;
  }

  // async remove(id: string): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}
