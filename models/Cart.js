import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client", // Relación con el cliente
    required: true,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product", // Relación con el producto
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
