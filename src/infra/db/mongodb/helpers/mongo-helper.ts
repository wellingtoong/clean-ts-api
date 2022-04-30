import { Collection, MongoClient } from "mongodb";

export const MongoHelper = {
  // inicializando o client como null pq a sintax do js é a mesma que o do js,
  // dessa forma nao comflita
  client: null as MongoClient,

  async connet(uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL);
  },

  async disconnect(): Promise<void>  {
    await this.client.close();
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  },

  map:(collection: any) : any => {
    const {_id, ... collectionWithoutId} = collection
    return Object.assign({}, collectionWithoutId, {id: _id.toHexString()})
  }
};
