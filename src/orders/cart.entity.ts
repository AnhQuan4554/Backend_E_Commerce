import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Carts {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  image: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  qty: number;
}
