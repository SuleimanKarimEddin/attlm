import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsiteModule } from './website/website.module';
import { PrismaModule } from './prisma/prisma.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [WebsiteModule , PrismaModule, SuperAdminModule, CustomerDashboardModule,AiModule],
  controllers: [AppController],
  providers: [AppService] ,
})
export class AppModule {}
