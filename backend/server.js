import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/cart.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => console.log("Server running on port 5000"));
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });
