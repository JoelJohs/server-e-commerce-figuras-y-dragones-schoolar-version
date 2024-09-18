import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// Add to cart

export const addToCart = async (req, res, next) => {
  try {
    const clientId = req.clientId._id;
    const { productId, quantity } = req.body;

    // Check if the product exists
    const cart = await Cart.findOne({ client: clientId });
    if (!cart) {
      res.status(404).json({ message: "Cart not found" });
      next();
    }

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      next();
    }

    const existingProductIndex = cart.products.findIndex(
      (item) => item.product.toString() == productId
    );

    if (existingProductIndex >= 0) {
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
    next();
  }
};
