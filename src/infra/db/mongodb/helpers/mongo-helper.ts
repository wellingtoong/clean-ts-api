import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  // inicializando o client como null pq a sintax do js é a mesma que o do js,
  // dessa forma nao comflita
  client: null as MongoClient,
  uri: null as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    if (collection.length) {
      const newCollection = []
      collection.forEach(item => {
        const { _id, ...collectionWithoutId } = item
        newCollection.push(Object.assign({}, collectionWithoutId, { id: _id.toHexString() }))
      })
      return newCollection
    }
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id.toHexString() })
  }
}
