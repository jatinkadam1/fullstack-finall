import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1]; // Extract token
    console.log("Received token:", token);

    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error("JWT Verification Error:", err.message);
        return res.status(403).json({ message: "Invalid token." });
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error("Error in verifyToken middleware:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
