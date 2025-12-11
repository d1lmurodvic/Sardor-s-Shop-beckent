const Order = require("../models/orderModel");
const Product = require("../models/productModel");

exports.buyProduct = async (req, res) => {
  try {
    const { productId, buyerName, quantity } = req.body;

    if (!productId || !buyerName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const qty = quantity || 1;
    const totalPrice = product.price * qty;

    const newOrder = await Order.create({
      product: productId,
      buyerName,
      quantity: qty,
      totalPrice,
      
      productSnapshot: {
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        status: product.status,
        category: product.category,
        rating: product.rating,
      }
    });

    res.status(201).json({
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("product");
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
