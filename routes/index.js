import express from "express";

import clientsRoutes from "./clientsRoutes.js";

// Create router
const router = express.Router();

// Client routes
router.use("/", clientsRoutes);

// Export the router
export default router;
