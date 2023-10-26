import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreatProductDto } from './dto/product.dto';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private usersRepository: Repository<Product>,
  ) {}

  getHello(): string {
    return 'Hello User!';
  }
  async creatProduct(creatProduct: CreatProductDto) {
    const result = await this.usersRepository.save(creatProduct);
    console.log('result when creat', result);
    return result;
  }
  // async findAll(): Promise<User[]> {
  //   return this.usersRepository.find();
  // }

  // findOne(id: number): Promise<User | null> {
  //   return this.usersRepository.findOneBy({ id });
  // }

  // async remove(id: string): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}
