import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
