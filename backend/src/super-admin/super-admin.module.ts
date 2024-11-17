import { Module } from '@nestjs/common';
import { PlaneModule } from './plane/plane.module';
import { CustomerModule } from './customer/customer.module';
import { FaqModule } from './faq/faq.module';
import { SuperAdminService } from './super-admin.service';
import { SuperAdminController } from './super-admin.controller';

@Module({
  imports: [PlaneModule, CustomerModule, FaqModule],
  providers: [SuperAdminService],
  controllers: [SuperAdminController]
})
export class SuperAdminModule {}
