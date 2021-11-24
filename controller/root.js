const express = require('express');
const productRouter = require('./product/router');

const root = express.Router({ mergeParams: true });

productRouter(root);

module.exports = (app) => {
  app.use('/api', root);
};