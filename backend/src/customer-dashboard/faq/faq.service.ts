import { Injectable } from '@nestjs/common';
import { FAQ } from '@prisma/client';
import { EmbeddingService } from 'src/ai/embadding.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FaqsService {
  constructor(private prisma: PrismaService,private embaddingService: EmbeddingService) {}

  // async createFAQ(data: { data:string; customerId: number }): Promise<FAQ> {
  //   const dataChuncks =await this.embaddingService.processAndStoreLargeText(data.data);
  //   for (const data of dataChuncks) {
  //     const bufferEmbedding = this.floatArrayToBuffer(data.embedding);

  //     return this.prisma.fAQ.create({
  //       data:{
  //         data:data.text,
  //         vector:bufferEmbedding,
  //         customerId:6
  //       }
  //     });
  //   }
 
  // }

  async getFAQs(customerId: number): Promise<FAQ[]> {
    return this.prisma.fAQ.findMany({
      where: { customerId },
    });
  }

  // async updateFAQ(id: number, data: { answer: string  , question:string}): Promise<FAQ> {
  //   return this.prisma.fAQ.update({
  //     where: { id:+id },
  //     data:{
  //       answer:data.answer,
  //       question:data.question
  //     },
  //   });
  // }

  // async deleteFAQ(id: number): Promise<FAQ> {
  //   return this.prisma.fAQ.delete({
  //     where: { id },
  //   });
  // }

}


