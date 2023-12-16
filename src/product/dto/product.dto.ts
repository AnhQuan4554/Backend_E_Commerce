import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column } from 'typeorm';

@Entity()
export class CreatProductDto {
  @IsString()
  @IsNotEmpty()
  @Column({ unique: true })
  title: string;
  @Column()
  image: string;
  @IsNotEmpty()
  @IsNumber()
  @Column()
  price: number;

  @Column()
  description: string;
  @IsString()
  @IsNotEmpty()
  @Column()
  created_at: string;

  // @Column()
  // updated_at: Date;
}
