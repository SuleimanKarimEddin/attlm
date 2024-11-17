import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; 
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from '@prisma/client'; 

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.prisma.customer.create({
      data: createCustomerDto,
    });
  }

  async findAll(): Promise<Customer[]> {
    return this.prisma.customer.findMany({
      include: {
        plan: true,
      },
    });
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
      include: {
        plan: true, 
      },
    });
    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const customerExists = await this.prisma.customer.findUnique({
      where: { id },
    });
    if (!customerExists) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  async remove(id: number): Promise<void> {
    const customerExists = await this.prisma.customer.findUnique({
      where: { id },
    });
    if (!customerExists) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }
    await this.prisma.customer.delete({
      where: { id },
    });
  }
}
