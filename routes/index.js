import express from "express";

import clientsRoutes from "./clientsRoutes.js";
import productRoutes from "./productRoutes.js";

// Create router
const router = express.Router();

// Client routes
router.use("/", clientsRoutes);
router.use("/", productRoutes);

// Export the router
export default router;
