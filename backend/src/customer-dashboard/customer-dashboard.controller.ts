import { Body, Controller, Post } from '@nestjs/common';
import { CustomerDashboardService } from './customer-dashboard.service';

@Controller('customer-dashboard')
export class CustomerDashboardController {
    constructor(
        private readonly customerDashboardService: CustomerDashboardService,
      ) {}

    @Post('login')
    async login(@Body() body: { email: string; password: string }): Promise<any> {
      return this.customerDashboardService.validateCustomer(body.email, body.password);
    }
}
