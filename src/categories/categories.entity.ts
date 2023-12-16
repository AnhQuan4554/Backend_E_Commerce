import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categories_Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
  // @Column()
  // password: string;

  // @OneToMany(type => Order, order => order.user)
  // orders: Order[];
  //   @Column({ default: true })
  //   isActive: boolean;
}
