import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Adjust the import path as needed
import { CreatePlaneDto } from './dto/create-plane.dto';
import { UpdatePlaneDto } from './dto/update-plane.dto';
import { Plan } from '@prisma/client'; // Adjust the import based on your project structure

@Injectable()
export class PlaneService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPlaneDto: CreatePlaneDto): Promise<Plan> {
    return this.prisma.plan.create({
      data: createPlaneDto,
    });
  }

  async findAll(): Promise<Plan[]> {
    return this.prisma.plan.findMany();
  }

  async findOne(id: number): Promise<Plan> {
    const plan = await this.prisma.plan.findUnique({
      where: { id },
    });
    if (!plan) {
      throw new NotFoundException(`Plane with id ${id} not found`);
    }
    return plan;
  }

  async update(id: number, updatePlaneDto: UpdatePlaneDto): Promise<Plan> {
    const planExists = await this.prisma.plan.findUnique({
      where: { id },
    });
    if (!planExists) {
      throw new NotFoundException(`Plane with id ${id} not found`);
    }
    return this.prisma.plan.update({
      where: { id },
      data: updatePlaneDto,
    });
  }

  async remove(id: number): Promise<void> {
    const planExists = await this.prisma.plan.findUnique({
      where: { id },
    });
    if (!planExists) {
      throw new NotFoundException(`Plane with id ${id} not found`);
    }
    await this.prisma.plan.delete({
      where: { id },
    });
  }
}
