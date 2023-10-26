import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoriesDto } from './dto/categories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriesDto])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
