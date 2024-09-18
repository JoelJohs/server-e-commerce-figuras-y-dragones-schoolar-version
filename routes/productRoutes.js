import express from "express";
import {
  createProduct,
  uploadImage,
} from "../controllers/productsController.js";
import { upload } from "../utils/multer.js";

// Create router
const router = express.Router();

// Create a new product
router.post("/products", upload.single("image"), uploadImage, createProduct);

// Export router
export default router;
