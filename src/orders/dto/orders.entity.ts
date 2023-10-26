import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class CreatOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  order_id: string;

  @Column()
  user_id: string;

  @Column()
  created_at: Date;
}
