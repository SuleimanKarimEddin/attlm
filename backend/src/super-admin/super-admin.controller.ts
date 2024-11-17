import { Controller, Post, Body } from '@nestjs/common';
import { SuperAdminService } from './super-admin.service';
import { AdminLoginDto } from './dto/admin-login.dto';

@Controller('superAdmin')
export class SuperAdminController {
  constructor(private readonly superAdminService: SuperAdminService) {}

  @Post('login')
  async login(@Body() adminLoginDto: AdminLoginDto) {
    return this.superAdminService.login(adminLoginDto);
  }
}
