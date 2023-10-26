import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  // @Column()
  // picture: string;

  // @Column()
  // description: string;

  @Column()
  created_at: string;

  // @Column()
  // updated_at: Date;
}
