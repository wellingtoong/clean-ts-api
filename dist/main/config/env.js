"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/clean-node-api',
    port: process.env.PORT || 5050,
    jwtSecret: process.env.JWT_SECRET || 'tj670==5H'
};
//# sourceMappingURL=env.js.map