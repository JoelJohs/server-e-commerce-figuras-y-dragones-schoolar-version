import Client from "../models/Client.js";

// Create new client
export const createClient = async (req, res) => {
  // Create a new client
  const client = new Client(req.body);

  // Save the client
  try {
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
    res.status(200).json(client);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};