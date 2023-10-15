import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  @Column()
  email: string;
  // @Column()
  // password: string;

  // @OneToMany(type => Order, order => order.user)
  // orders: Order[];
  //   @Column({ default: true })
  //   isActive: boolean;
}
