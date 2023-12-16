import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Notifycation {
  @PrimaryGeneratedColumn()
  id: number;

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
  @Column()
  created_at: string;
}
