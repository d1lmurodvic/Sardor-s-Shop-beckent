const express = require("express");
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getLikedProducts,
} = require("../controllers/productController");
const { likeProduct } = require("../controllers/likeController");

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
/**
 * @swagger
 * /api/products/like/{id}:
 *   post:
 *     summary: Like or unlike a product (toggle)
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product unliked successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product unliked
 *                 likes:
 *                   type: number
 *                   example: 10
 *                 liked:
 *                   type: boolean
 *                   example: false
 *       201:
 *         description: Product liked successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product liked
 *                 likes:
 *                   type: number
 *                   example: 11
 *                 liked:
 *                   type: boolean
 *                   example: true
 *       401:
 *         description: Unauthorized (token missing or invalid)
 *       404:
 *         description: Product not found
 */

router.post("/like/:id", likeProduct);


/**
 * @swagger
 * /api/products/liked:
 *   get:
 *     summary: Get all liked products of current user
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of liked products
 *       401:
 *         description: Unauthorized
 */
router.get("/liked", getLikedProducts);



module.exports = router;