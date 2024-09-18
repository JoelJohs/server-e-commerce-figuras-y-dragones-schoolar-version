import express from "express";
import {
  createProduct,
  tryPostFile,
} from "../controllers/productsController.js";
import { upload } from "../utils/multer.js";

// Create router
const router = express.Router();

// Create a new product
router.post("/products", createProduct);

router.post("/products/try", upload.single("image"), tryPostFile);

// Export router
export default router;
