import { Module } from '@nestjs/common';
import { FaqsController } from './faq.controller';
import { FaqsService } from './faq.service';
import { EmbeddingService } from 'src/ai/embadding.service';


@Module({
  controllers: [FaqsController],
  providers: [FaqsService,EmbeddingService],
})
export class FaqModule {}
