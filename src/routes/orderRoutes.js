const express = require("express");
const {
  buyProduct,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Product ordering APIs
 */

/**
 * @swagger
 * /api/orders/buy:
 *   post:
 *     summary: Buy a product
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - buyerName
 *             properties:
 *               productId:
 *                 type: string
 *                 example: 676b2f7af1d04b12345098ab
 *               buyerName:
 *                 type: string
 *                 example: Sardor
 *       
 *               quantity:
 *                 type: number
 *                 example: 2
 *     responses:
 *       201:
 *         description: Order created successfully
 */
router.post("/buy", buyProduct);

/**
 * @swagger
 * /api/orders/all:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 */
router.get("/all", getAllOrders);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get order details by ID
 *     tags: [Orders]
 */
router.get("/:id", getOrderById);

/**
 * @swagger
 * /api/orders/update/{id}:
 *   put:
 *     summary: Update order status
 *     tags: [Orders]
 */
router.put("/update/:id", updateOrderStatus);

module.exports = router;
