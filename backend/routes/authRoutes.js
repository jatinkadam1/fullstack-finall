import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js"; // Create this model
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
  try {
    console.log("🔍 Registering User:", req.body); // Debugging

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "⚠️ All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "⚠️ User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    console.log("✅ User Registered Successfully:", newUser);

    res.status(201).json({ message: "🎉 User registered successfully" });
  } catch (error) {
    console.error("❌ Registration Error:", error); // Log error
    res.status(500).json({ message: "Server error" });
  }
});

// User Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
