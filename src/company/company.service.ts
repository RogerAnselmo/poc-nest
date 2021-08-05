import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CompanyAddress } from "./entities/company-adress.entity";
import { Company } from "./entities/company.entity";

@Injectable()
export class CompanyService {

    constructor(@InjectRepository(Company) private readonly companyRepository: Repository<Company>,
        @InjectRepository(CompanyAddress) private readonly companyAdressRepository: Repository<CompanyAddress>) { }

    getAll() {
        return this.companyRepository.find();
    }


    async save(company: Company) {
        company.address = await this.companyAdressRepository.save(company.address);
        await this.companyRepository.save(company);
    }
}