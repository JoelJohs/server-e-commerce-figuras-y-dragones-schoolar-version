import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["client", "admin"], // Definimos los roles disponibles
    default: "client",
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Cart", // Relación con el carrito de compras
  },
});

const Client = mongoose.model("Clients", clientSchema);
export default Client;