import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AiService } from './ai.service';
import { EmbeddingService } from './embadding.service';
import { DataService } from './data.services';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService,private readonly dataService:DataService) {
  }
  @Get()
  async geTrequest(){
      // return this.aiService.sendRequest();
  }
  @Get('chunk')
  async chunkText() {
    return this.dataService.getAllChunck(1);
    
  }
  // @Post('extract')
  // async extractEmbeddings(@Body('texts') texts: string[]) {
  //   return this.dataService.getEmbeddings(texts);
  // }

  @Post('save')
  async saveText(@Body('data') data: string) {
    const result = await this.dataService.createFaq(1,data);
    return { message: 'Text saved', data: result };
  }

  @Get('similar')
  async findSimilarText(@Query('text') text: string) {
    const similar = await this.dataService.getAnswersForTheQuestion(1,text);
    return { message: 'Most similar text found', data: similar };
  }
}
