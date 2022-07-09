"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
const cors = (req, res, next) => {
    res.set('acess-control-allow-origin', '*');
    res.set('acess-control-allow-headers', '*');
    res.set('acess-control-allow-methods', '*');
    next();
};
exports.cors = cors;
