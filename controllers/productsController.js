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
