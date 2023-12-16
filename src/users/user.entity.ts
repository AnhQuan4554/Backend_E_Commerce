import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  address: string;
  @Column()
  phone: string;

  // @OneToMany(type => Order, order => order.user)
  // orders: Order[];
  //   @Column({ default: true })
  //   isActive: boolean;
}
