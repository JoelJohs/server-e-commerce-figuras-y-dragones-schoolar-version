import Client from "../models/Client.js";
import Cart from "../models/Cart.js";

// Create new client
export const createClient = async (req, res) => {
  // Create a new client
  try {
    const client = new Client(req.body);
    await client.save();

    const cart = new Cart();
    await cart.save();

    // Asociate cart with client
    client.cart = cart._id;
    await client.save();

    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
    next();
  }
};

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.status(200).json(client);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const client = await Client.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(client);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findOneAndDelete({ _id: req.params.id });
    if (client) {
      res.status(200).json({ message: "Client deleted" });
    } else {
      res.status(404).json({ message: "Client not found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
