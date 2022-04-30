import { MongoClient } from "mongodb";

export const MongoHelper = {
  // inicializando o client como null pq a sintax do js é a mesma que o do js,
  // dessa forma nao comflita
  client: null as MongoClient,

  async connet(uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
  },

  async disconnect(): Promise<void>  {
    await this.client.close();
  },
};
