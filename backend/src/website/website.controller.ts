import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { WebsiteService } from './website.service';
import { SendMessageDto } from './dto/send-message.dto';


@Controller('website')
export class WebsiteController {
  constructor(private readonly websiteService: WebsiteService) {}
  @Get('plans')
  async getAllPlans() {
    return this.websiteService.getAllPlans();
  }

  @Post('messages')
  async sendMessage(@Body() sendMessageDto: SendMessageDto) {
    return this.websiteService.sendMessage(sendMessageDto);
  }

  @Get('messages')
  async getGuestMessages(@Query('guestId') guestId: string) {
    return this.websiteService.getGuestMessages(guestId);
  }
}
