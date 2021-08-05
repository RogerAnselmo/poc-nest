import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CompanyService } from './company/company.service';
import { Company } from './company/entities/company.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: CompanyService) {}

  @Get()
  getHello(): Promise<Company[]> {
    return this.appService.getAll();
  }

  @Post()
  async save(@Body() company:Company) {
     await this.appService.save(company);
  }
}
