import { Module } from '@nestjs/common';
import { FAQController } from './faq.controller';
import { FAQService } from './faq.service';


@Module({
  controllers: [FAQController],
  providers: [FAQService],
})
export class FaqModule {}
