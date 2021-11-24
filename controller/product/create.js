const { StatusCodes } = require("http-status-codes");

/**
 *  @swagger
 * /product:
 *   post:
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *     - "product"
 *     summary: "Create new product"
 *     description: "Create new product"
 *     parameters:
 *       - in: body
 *         name: body
 *         type: "object"
 *         required: true
 *         description: "Product data."
 *         schema:
 *           type: "object"
 *           properties:
 *             name:
 *               type: "string"
 *             store:
 *               type: "string"
 *     responses:
 *       201:
 *         description: "Product created."
 *       401:
 *         description: "Unauthorized."
 *       500:
 *         description: "Internal server error."
 */
const handler = async (req, res, next) => {
  try {
    const { name } = req.body;
    res.status(StatusCodes.CREATED).send({ _id: 3, name });
  } catch (err) {
    next(err);
  }
};

module.exports = (router) => {
  router.post('/', handler);
}