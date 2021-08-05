/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyAddress } from './company-adress.entity';
// import { CompanyAddress } from './company-address.model';
// import { CompanyResponsible } from './company-responsible.model';
// import { BusinessSegment } from './business-segment.model';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 14, nullable: false })
  cnpj: string;

  // TODO: renomear "razão social" para o termo em inglês
  @Column({ length: 50, nullable: false })
  socialReason: string;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column()
  website: string;

  @OneToOne(() => CompanyAddress)
  @JoinColumn()
  address: CompanyAddress;

//   @OneToOne(() => CompanyResponsible)
//   @JoinColumn()
//   responsible: CompanyResponsible;

  // @Column()
  // segment: BusinessSegment;
}
