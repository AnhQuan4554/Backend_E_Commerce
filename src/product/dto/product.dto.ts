import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class CreatProductDto {
  @IsString()
  @IsNotEmpty()
  @Column({ unique: true })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Column()
  price: number;

  // @Column()
  // picture: string;

  // @Column()
  // description: string;
  @IsString()
  @IsNotEmpty()
  @Column()
  created_at: string;

  // @Column()
  // updated_at: Date;
}
