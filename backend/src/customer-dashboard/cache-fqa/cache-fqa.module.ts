import { Module } from '@nestjs/common';
import { CacheFqaService } from './cache-fqa.service';
import { CacheFqaController } from './cache-fqa.controller';

@Module({
  controllers: [CacheFqaController],
  providers: [CacheFqaService],
})
export class CacheFqaModule {}
