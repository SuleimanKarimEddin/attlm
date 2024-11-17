import { Module } from '@nestjs/common';
import { FaqModule } from './faq/faq.module';
import { CustomerDashboardController } from './customer-dashboard.controller';
import { CustomerDashboardService } from './customer-dashboard.service';
import { CacheFqaModule } from './cache-fqa/cache-fqa.module';

@Module({
  imports: [FaqModule, CacheFqaModule],
  controllers: [CustomerDashboardController],
  providers: [CustomerDashboardService]
})
export class CustomerDashboardModule {}
