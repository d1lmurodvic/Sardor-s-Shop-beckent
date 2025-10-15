const express = require("express");
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  likeProduct,
} = require("../controllers/productController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management APIs
 */

/**
 * @swagger
 * /api/products/create:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - price
 *               - image
 *               - status
 *               - category
 *               - rating
 *             properties:
 *               title:
 *                 type: string
 *                 example: Apple
 *               description:
 *                 type: string
 *                 example: This product is really good
 *               price:
 *                 type: number
 *                 example: 12
 *               image:
 *                 type: string
 *                 example: https://example.com/apple.png
 *               status:
 *                 type: string
 *                 example: Pending
 *               category:
 *                 type: string
 *                 example: Jonka
 *               rating:
 *                 type: number
 *                 example: 5
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Missing required fields
 */
router.post("/create", createProduct);

/**
 * @swagger
 * /api/products/all:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of all products
 */
router.get("/all", getAllProducts);

/**
 * @swagger
 * /api/products/edit/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Apple
 *               price:
 *                 type: number
 *                 example: 15
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 */
router.put("/edit/:id", updateProduct);

/**
 * @swagger
 * /api/products/delete/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */
router.delete("/delete/:id", deleteProduct);

/**
 * @swagger
 * /api/products/like/{id}:
 *   post:
 *     summary: Like a product by ID
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product liked successfully
 *       404:
 *         description: Product not found
 */
router.post("/like/:id", likeProduct);

module.exports = router;