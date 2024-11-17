import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CacheFqaService } from './cache-fqa.service';
import { CreateCacheFqaDto } from './dto/create-cache-fqa.dto';
import { UpdateCacheFqaDto } from './dto/update-cache-fqa.dto';

@Controller('cache-fqa')
export class CacheFqaController {
  constructor(private readonly cacheFqaService: CacheFqaService) {}

  @Post()
  create(@Body() createCacheFqaDto: CreateCacheFqaDto) {
    return this.cacheFqaService.create(createCacheFqaDto);
  }

  @Get()
  findAll() {
    return this.cacheFqaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cacheFqaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCacheFqaDto: UpdateCacheFqaDto) {
    return this.cacheFqaService.update(+id, updateCacheFqaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cacheFqaService.remove(+id);
  }
}
