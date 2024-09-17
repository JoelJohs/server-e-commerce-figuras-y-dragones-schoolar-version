import express from "express";
import { getProducts } from "../controllers/productsController";
import { MulterError } from "multer";

// Create router
const router = express.Router();

// Get all products
router.get("/products", getProducts);
