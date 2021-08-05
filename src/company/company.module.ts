import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "./entities/company.entity";
import { CompanyService } from "./company.service";
import { CompanyAddress } from "./entities/company-adress.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Company, CompanyAddress])],
    providers:[CompanyService],
    exports:[CompanyService]
})
export class CompanyModule{

}