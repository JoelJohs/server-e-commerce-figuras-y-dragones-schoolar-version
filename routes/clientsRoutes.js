import express from "express";

import { createClient, getClients, getClientById, updateClient, deleteClient } from "../controllers/clientController.js";

// Create router
const router = express.Router();

// Create a new client
router.post("/clientes", createClient);

// Get all clients
router.get("/clientes", getClients);

// Get a client by ID
router.get("/clientes/:id", getClientById);

// Update a client by ID
router.put("/clientes/:id", updateClient);

// Delete a client by ID
router.delete("/clientes/:id", deleteClient);

export default router;