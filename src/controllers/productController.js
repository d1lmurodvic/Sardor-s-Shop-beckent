const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, image, status, category, rating } = req.body;

    if (!title || !description || !price || !image || !status || !category || !rating) {
      return res.status(400).json({ message: "Please complete all required fields" });
    }

    const newProduct = await Product.create({
      title,
      description,
      price,
      image,
      status,
      category,
      rating,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, overwrite: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const removeProduct = await Product.findByIdAndDelete(req.params.id);

    if (!removeProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(removeProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
