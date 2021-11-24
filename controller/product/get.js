const { StatusCodes } = require("http-status-codes");

/**
 *  @swagger
 * /product:
 *   get:
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *     - "product"
 *     summary: "Get all products"
 *     description: "Get all products"
 *     responses:
 *       200:
 *         description: "Return all products."
 *       204:
 *         description: "No products found."
 *       401:
 *         description: "Unauthorized."
 *       500:
 *         description: "Internal server error."
 */
const handler = (req, res, next) => {
  try {
    return res.status(StatusCodes.OK).send([
      { _id: 1, name: 'Banana' },
      { _id: 2, name: 'Peach' },
    ]);
  } catch (err) {
    next(err);
  }
}

module.exports = (router) => {
  router.get('/', handler);
}