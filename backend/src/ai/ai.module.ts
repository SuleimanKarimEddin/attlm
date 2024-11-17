import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { EmbeddingService } from './embadding.service';
import { DataService } from './data.services';

@Module({
  controllers: [AiController],
  providers: [AiService,EmbeddingService,DataService],
  exports: [EmbeddingService]
})
export class AiModule {}
