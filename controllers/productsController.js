import Products from "../models/productsModel.js";
import upload from "../middleware/multerConfig.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a product
export const createProduct = async (req, res) => {
  try {
    const product = new Products({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.file.path,
    });
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
