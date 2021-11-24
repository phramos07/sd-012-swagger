const { StatusCodes } = require("http-status-codes");

/**
 *  @swagger
 * /product/{id}:
 *   delete:
 *     security:
 *       - ApiKeyAuth: []
 *     tags:
 *     - "product"
 *     summary: "Create new product"
 *     description: "Create new product"
 *     parameters:
 *       - in: path
 *         name: id
 *         type: "integer"
 *         required: true
 *         description: "Product id."
 *     responses:
 *       204:
 *         description: "Product deleted."
 *       404:
 *         description: "Product not found."
 *       401:
 *         description: "Unauthorized."
 *       500:
 *         description: "Internal server error."
 */
const handler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id == 0) {
      return res.status(StatusCodes.NOT_FOUND).end();
    }
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
};

module.exports = (router) => {
  router.delete('/:id', handler);
}