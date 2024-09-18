import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductByCategory,
  getProuctById,
  uploadImage,
} from "../controllers/productsController.js";
import { upload } from "../utils/multer.js";

// Create router
const router = express.Router();

// Create a new product
router.post("/products", upload.single("image"), uploadImage, createProduct);

// Get all products
router.get("/products", getAllProducts);

// Get product by Id
router.get("/products/:id", getProuctById);

// Get product by category
router.get("/products/categorias/:category", getProductByCategory);

// Export router
export default router;
