"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoHelper = void 0;
const mongodb_1 = require("mongodb");
exports.MongoHelper = {
    // inicializando o client como null pq a sintax do js é a mesma que o do js,
    // dessa forma nao comflita
    client: null,
    uri: null,
    async connect(uri) {
        this.uri = uri;
        this.client = await mongodb_1.MongoClient.connect(uri);
    },
    async disconnect() {
        await this.client.close();
        this.client = null;
    },
    async getCollection(name) {
        if (!this.client) {
            await this.connect(this.uri);
        }
        return this.client.db().collection(name);
    },
    map: (collection) => {
        const { _id, ...collectionWithoutId } = collection;
        return Object.assign({}, collectionWithoutId, { id: _id.toHexString() });
    },
};
//# sourceMappingURL=mongo-helper.js.map