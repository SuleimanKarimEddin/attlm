import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Adjust the import path as needed
import { FAQ } from '@prisma/client'; // Adjust the import based on your project structure
import { CreateFAQDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';

@Injectable()
export class FAQService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFAQDto: CreateFAQDto) {
  //   return this.prisma.fAQ.create({
  //     data: createFAQDto,
  //   });
  }

  async findAll(): Promise<FAQ[]> {
    return this.prisma.fAQ.findMany({
      include:{
        customer:true
      }
    });
  }

  async findOne(id: number): Promise<FAQ> {
    const faq = await this.prisma.fAQ.findUnique({
      where: { id },
    });
    if (!faq) {
      throw new NotFoundException(`FAQ with id ${id} not found`);
    }
    return faq;
  }

  async update(id: number, updateFAQDto: UpdateFaqDto): Promise<FAQ> {
    const faqExists = await this.prisma.fAQ.findUnique({
      where: { id },
    });
    if (!faqExists) {
      throw new NotFoundException(`FAQ with id ${id} not found`);
    }
    return this.prisma.fAQ.update({
      where: { id },
      data: updateFAQDto,
    });
  }

  async remove(id: number): Promise<void> {
    const faqExists = await this.prisma.fAQ.findUnique({
      where: { id },
    });
    if (!faqExists) {
      throw new NotFoundException(`FAQ with id ${id} not found`);
    }
    await this.prisma.fAQ.delete({
      where: { id },
    });
  }
}
