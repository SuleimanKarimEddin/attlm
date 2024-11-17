import { Controller, Get, Post, Put, Delete, Body, Param, Req, UseGuards } from '@nestjs/common';
import { FAQ } from '@prisma/client';
import { User } from 'src/common/decorator/user.decorator';
import { FaqsService } from './faq.service';

@Controller('customerDashboard/faqs')
export class FaqsController {
  constructor(private readonly customerDashboardService: FaqsService) {}

  // @Post()
  // async createFAQ(@Body() body: { question: string; answer: string } , @User() user): Promise<FAQ> {
  //   const customerId = 6; 
  //   return this.customerDashboardService.createFAQ({ ...body, customerId });
  // }

  @Get()
  async getFAQs(@Req() req): Promise<FAQ[]> {
    const customerId = 1; 
    return this.customerDashboardService.getFAQs(customerId);
  }

  // @Put(':id')
  // async updateFAQ(@Param('id') id: number, @Body() body: { answer: string , question:string}): Promise<FAQ> {
  //   return this.customerDashboardService.updateFAQ(id, body);
  // }

  // @Delete(':id')
  // async deleteFAQ(@Param('id') id: number): Promise<FAQ> {
  //   return this.customerDashboardService.deleteFAQ(+id);
  // }
}
