import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompanyAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  street: string;

  @Column()
  number: number;

  @Column({ length: 40 })
  complement?: string;

  @Column({ length: 20 })
  district: string;

  @Column({ length: 8 })
  cep: string;

  @Column()
  city: string;

  @Column()
  state: string;
}