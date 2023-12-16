import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;
  @Column()
  image: string;
  @Column()
  description: string;
  @Column()
  title: string;
  @Column()
  qty: number;
  @Column()
  price: number;

  @Column()
  created_at: string;
}
