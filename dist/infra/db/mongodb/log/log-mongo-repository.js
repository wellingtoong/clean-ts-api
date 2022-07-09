"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMongoRepository = void 0;
const mongo_helper_1 = require("../helpers/mongo-helper");
class LogMongoRepository {
    async logError(stack) {
        const errorCollection = await mongo_helper_1.MongoHelper.getCollection('errors');
        await errorCollection.insertOne({
            stack,
            data: new Date()
        });
    }
}
exports.LogMongoRepository = LogMongoRepository;
