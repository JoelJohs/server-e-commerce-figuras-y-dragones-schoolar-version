import express from "express";

import cartController from "../controllers/cartController";
import { addToCart } from "../controllers/cartController";

const router = express.Router();

router.post("/add-to-cart", addToCart);

export default router;
