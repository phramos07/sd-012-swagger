const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
}

module.exports = (app) => {
  app.use(errorHandler);
}