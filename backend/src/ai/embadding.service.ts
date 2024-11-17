import { Injectable } from '@nestjs/common';

@Injectable()
export class EmbeddingService {

    private extractor: any;
    private embeddingsStore: { text: string, embedding: number[] }[] = [];

  constructor() {
    this.initialize()
  }

  async initialize() {
    console.log("initilazation start");
    
    try {
      const TransformersApi = Function('return import("@xenova/transformers")')();
      const { pipeline } = await TransformersApi;
      this.extractor = await pipeline('feature-extraction', 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2', {
        quantized: false,
      });
    } catch (error) {
      console.error('Error initializing embedding pipeline:', error);
      throw new Error('Failed to initialize embedding pipeline');
    }
  }
  async getEmbeddings(texts: string[]) {
    
      const embeddings = await this.extractor(texts, { pooling: 'mean', normalize: true });
      return Array.from(embeddings.data) as number[]
  }
  async saveTextAndEmbedding(text: string) {
    const embedding = await this.getEmbeddings([text]);
    this.embeddingsStore.push({ text, embedding: embedding });
    return { text, embedding: embedding };
  }

  async findSimilarText(inputText: string) {
    const inputEmbedding = (await this.getEmbeddings([inputText]));
    let bestMatch = { text: '', similarity: -1 };

    this.embeddingsStore.forEach((storedItem) => {
      const similarity = cosineSimilarity(inputEmbedding, storedItem.embedding);
      if (similarity > bestMatch.similarity) {
        bestMatch = { text: storedItem.text, similarity };
      }
    });

    return bestMatch;
  }

  
  async processAndStoreLargeText(
    text: string,
    maxLength: number = 500,
    similarityThreshold: number = 0.6
  ) {
    // Step 1: Chunk the text
    const chunks = this.chunkText(text, maxLength);
      // Step 2: Get embeddings for each chunk
    const chunkEmbeddings = await Promise.all(
      chunks.map(async chunk => {
        const embedding = await this.getEmbeddings([chunk]);
        return { text: chunk, embedding };
      })
    );
  
    // Step 3: Progressive merging based on similarity
    const finalChunks: { text: string; embedding: any }[] = [];
  
    for (let i = 0; i < chunkEmbeddings.length; i++) {
      let foundCluster = false;
  
      for (let j = 0; j < finalChunks.length; j++) {
        const similarity = cosineSimilarity(
          chunkEmbeddings[i].embedding,
          finalChunks[j].embedding
        );
  
        if (similarity > similarityThreshold) {
          finalChunks[j].text += " " + chunkEmbeddings[i].text;
          
          finalChunks[j].embedding = await this.getEmbeddings([
            finalChunks[j].text
          ]);
  
          foundCluster = true;
          break;
        }
      }
  
      if (!foundCluster) {
        finalChunks.push({
          text: chunkEmbeddings[i].text,
          embedding: chunkEmbeddings[i].embedding
        });
      }
    }
  
   return finalChunks;
   
  }
  
           

chunkText(text: string, maxLength: number = 500): string[] {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || []; // Split into sentences
    const chunks: string[] = [];
    let currentChunk = "";

    sentences.forEach((sentence) => {
        if ((currentChunk + sentence).length > maxLength && currentChunk.length > 100 && sentence.length > 100) {
            chunks.push(currentChunk.trim());
            currentChunk = sentence;
        } else {
            currentChunk += sentence;
        }
    });

    if (currentChunk) chunks.push(currentChunk.trim()); // Add the last chunk if any
    return chunks;
}
getAllChuncks(){
  return this.embeddingsStore.map(chunk => chunk.text);
}
}


function cosineSimilarity(a: number[], b: number[]): number {
    
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw new TypeError('Inputs to cosineSimilarity must be arrays');
    }
  
    if (a.length !== b.length) {
      throw new Error('Input arrays must have the same length');
    }
  
    const dotProduct = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
    const magnitudeA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
    const magnitudeB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  
    return dotProduct / (magnitudeA * magnitudeB);
  }
  
  