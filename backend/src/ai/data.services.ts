import { Inject, Injectable } from '@nestjs/common';
import { EmbeddingService } from './embadding.service';
import { PrismaService } from '../prisma/prisma.service';
import { AiService } from './ai.service';

@Injectable()
export class DataService {
  constructor(
    private readonly prisma: PrismaService,
    private embaddingService: EmbeddingService,
    private aiService: AiService,
  ) {}

  public async createFaq(userId: number, data: string) {
    const processedData =
      await this.embaddingService.processAndStoreLargeText(data);
    for (const element of processedData) {
      await this.prisma
        .$executeRaw`INSERT INTO "FAQ" ("data", "vector", "customerId") VALUES (${element.text}, ${JSON.stringify(element.embedding)}::vector, ${1})`;
    }
  }
  public async getAllChunck(userId: number) {
    return this.prisma.fAQ.findMany({
      where: {
        customerId: 1,
      },
    });
  }

  public async getSimilerDataForTheQuestion(userId: number, question: string) {
    const questionEmbadding = await this.embaddingService.getEmbeddings([
      question,
    ]);
    const results = await this.prisma
      .$queryRaw`SELECT id,data FROM "FAQ" ORDER BY vector <-> ${questionEmbadding}::vector LIMIT 2`;
    return results;
  }
  public async getAnswersForTheQuestion(userId: number, question: string) {
    const questionEmbadding = await this.embaddingService.getEmbeddings([
      question,
    ]);
    const THRESHOLD = 0.15;
    const similarAnswer:any = await this.prisma.$queryRaw`
    SELECT id, answer
    FROM "FAQAnswer" 
    WHERE "questionVector" <-> ${questionEmbadding}::vector < ${THRESHOLD} 
    ORDER BY "questionVector" <-> ${questionEmbadding}::vector 
    LIMIT 1
`;
if (similarAnswer?.length > 0) {
    console.log("wwwwwwwww cach hit");
    
    return similarAnswer[0].answer
}
    const dataArray: any = await this.prisma
      .$queryRaw`SELECT id,data FROM "FAQ" ORDER BY vector <-> ${questionEmbadding}::vector LIMIT 2`;
    const combinedData = dataArray.map((item) => item.data).join(' ');
    console.log(combinedData);
    
    const answer = await this.aiService.sendRequest(question, combinedData);

    await this.prisma.$executeRaw`
    INSERT INTO "FAQAnswer" (question, answer, "questionVector", "customerId", "createdAt", "updatedAt")
    VALUES (${question}, ${answer}, ${JSON.stringify(questionEmbadding)}::vector, ${userId}, NOW(), NOW())
  `;

    return answer;
  }
}
