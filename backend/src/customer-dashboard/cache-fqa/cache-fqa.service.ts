import { Injectable } from '@nestjs/common';
import { CreateCacheFqaDto } from './dto/create-cache-fqa.dto';
import { UpdateCacheFqaDto } from './dto/update-cache-fqa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CacheFqaService {
  constructor(private prismaService: PrismaService) {}
  create(createCacheFqaDto: CreateCacheFqaDto) {
    return 'This action adds a new cacheFqa';
  }

  findAll() {
    return this.prismaService.fAQAnswer.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} cacheFqa`;
  }

  update(id: number, updateCacheFqaDto: UpdateCacheFqaDto) {
    return `This action updates a #${id} cacheFqa`;
  }

  remove(id: number) {
    return this.prismaService.fAQAnswer.delete({ where: { id } });
  }
}
