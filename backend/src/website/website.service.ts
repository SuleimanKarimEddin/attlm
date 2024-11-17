// src/website/website.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class WebsiteService {
  constructor(private prisma: PrismaService) {}

  async getAllPlans() {
    return this.prisma.plan.findMany();
  }

  async sendMessage(sendMessageDto: SendMessageDto) {
    const { guestId, message } = sendMessageDto;
    return this.prisma.chatGuest.create({
      data: {
        guestId,
        message,
        type: 'GUEST', 
      },
    });
  }

  async getGuestMessages(guestId: string) {
    return this.prisma.chatGuest.findMany({
      where: { guestId },
      orderBy: { createdAt: 'asc' }, 
    });
  }
}
