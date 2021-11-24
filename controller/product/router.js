const express = require('express');
const getProduct = require('./get');
const createProduct = require('./create');
const deleteProduct = require('./delete');

const router = express.Router({ mergeParams: true });

getProduct(router);
createProduct(router);
deleteProduct(router);

module.exports = (root) => {
  root.use('/product', router);
}