const { StatusCodes } = require("http-status-codes");

const API_KEY = process.env.API_KEY || 'mysecret'

const authHandler = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Must inform API KEY' });
    }

    if (authorization !== API_KEY) {
      return res.status(StatusCodes.UNAUTHORIZED).send({message: 'Wrong API KEY' });
    }

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = (app) => {
  app.use('/api', authHandler);
}