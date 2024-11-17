import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class AiService {
  async sendRequest(question:string,data:string) {
    const apiKey = 'AIzaSyBaD_IKzag8NpHEnn5y4dcHz7bPQzfQbpA';
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `Answer the following question in the same language as the question. If the required information is not present in the provided context, respond with "false". Otherwise, provide a clear and accurate answer to the question using the context: \n\nQuestion: ${question}\nContext: ${data}\n\nAnswer:`;

    const result = await model.generateContent(prompt);
console.log(result.response.text());
    return result.response.text();
  }
}
