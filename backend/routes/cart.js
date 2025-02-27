import express from "express";
import mongoose from "mongoose";
import Cart from "../models/Cart.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// 🛒 Add product to cart
router.post("/add", verifyToken, async (req, res) => {
  try {
    console.log("Received request:", req.body);

    const { productId, title, price, image } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: User ID not found" });
    }

    if (!productId || !title || !price || !image) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID format" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    const existingProduct = cart.products.find(
      (p) => p.productId.toString() === productId.toString()
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.products.push({
        productId: new mongoose.Types.ObjectId(productId),
        title,
        price,
        image,
        quantity: 1,
      });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error in /api/cart/add:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 🛒 Get user cart
router.get("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: User ID not found" });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) return res.json([]);

    res.status(200).json(cart.products);
  } catch (error) {
    console.error("Error in /api/cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 🛒 Remove product from cart
router.delete("/remove/:productId", verifyToken, async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: User ID not found" });
    }

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID format" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const initialLength = cart.products.length;
    cart.products = cart.products.filter(
      (item) => item.productId.toString() !== productId.toString()
    );

    if (cart.products.length === initialLength) {
      return res.status(404).json({ error: "Product not found in cart" });
    }

    await cart.save();
    res.status(200).json(cart.products);
  } catch (error) {
    console.error("Error in /api/cart/remove:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
