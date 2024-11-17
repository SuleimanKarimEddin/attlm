import { Injectable } from '@nestjs/common';
import { AdminLoginDto } from './dto/admin-login.dto';

@Injectable()
export class SuperAdminService {
  async login(adminLoginDto: AdminLoginDto) {
    const { email, password } = adminLoginDto;

    if (email === 'admin@admin.com' && password === 'password') {
      return { message: 'Login successful', token: 'mock-token' };
    }

    return { message: 'Invalid credentials' };
  }
}
