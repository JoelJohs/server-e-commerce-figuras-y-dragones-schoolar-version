import express from "express";

import clientsRoutes from "./clientsRoutes.js";
import productRoutes from "./productRoutes.js";
import cartRoutes from "./cartRoutes.js";

// Create router
const router = express.Router();

// Client routes
router.use("/", clientsRoutes);
router.use("/", productRoutes);
router.use("/", cartRoutes);

// Export the router
export default router;
