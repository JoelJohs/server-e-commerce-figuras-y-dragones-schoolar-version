import Products from "../models/Products.js";
import path from "path";

// Middleware para manejar la subida de imágenes
export const uploadImage = (req, res, next) => {
  if (req.file) {
    return next();
  } else {
    return res.status(400).json({ message: "No file uploaded" });
  }
};

// Get all Products
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
};

// Get product by Id
export const getProuctById = async (req, res, next) => {
  try {
    const product = await Products.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
};

// get product by category
export const getProductByCategory = async (req, res, next) => {
  try {
    const products = await Products.find({ category: req.params.category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
};

// Create a new product
export const createProduct = async (req, res, next) => {
  try {
    const product = new Products(req.body);

    if (req.file) {
      const relativePath = path.relative(path.resolve(), req.file.path);
      product.image = relativePath;
    }

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
};

// Update a product
export const updateProduct = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
};

// Delete a product
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Products.findOneAndDelete({ _id: req.params.id });
    if (product) {
      res.json({ message: "Product deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
};
