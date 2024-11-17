import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FAQService } from './faq.service';
import { CreateFAQDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { FAQ } from '@prisma/client'; // Adjust the import based on your project structure

@Controller('superAdmin/faqs')
export class FAQController {
  constructor(private readonly faqService: FAQService) {}

  @Post()
  async create(@Body() createFAQDto: CreateFAQDto) {
    // return this.faqService.create(createFAQDto);
  }

  @Get()
  async findAll(): Promise<FAQ[]> {
    return this.faqService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FAQ> {
    return this.faqService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFAQDto: UpdateFaqDto): Promise<FAQ> {
    return this.faqService.update(+id, updateFAQDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.faqService.remove(+id);
  }
}
