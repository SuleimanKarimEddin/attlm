import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PlaneService } from './plane.service';
import { CreatePlaneDto } from './dto/create-plane.dto';
import { UpdatePlaneDto } from './dto/update-plane.dto';
import { Plan } from '@prisma/client'; // Adjust the import based on your project structure

@Controller('/superAdmin/plans')
export class  PlaneController {
  constructor(private readonly planeService: PlaneService) {}

  @Post()
  async create(@Body() createPlaneDto: CreatePlaneDto): Promise<Plan> {
    return this.planeService.create(createPlaneDto);
  }

  @Get()
  async findAll(): Promise<Plan[]> {
    return this.planeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Plan> {
    return this.planeService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePlaneDto: UpdatePlaneDto): Promise<Plan> {
    return this.planeService.update(+id, updatePlaneDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.planeService.remove(+id);
  }
}
