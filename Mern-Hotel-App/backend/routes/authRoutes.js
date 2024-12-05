import express from "express";
import { check, validationResult } from "express-validator";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// Route: POST /login
// Purpose: Authenticate user and return a token if credentials are valid
router.post(
  "/login",
  [
    // Validate email and password fields
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      // Compare entered password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      // Generate a JWT token for the user
      const token = jwt.sign(
        { userId: user.id }, // Payload
        process.env.JWT_SECRET_KEY, // Secret key
        {
          expiresIn: "1d", // Token expires in 1 day
        }
      );

      // Set the token as a cookie in the response
      res.cookie("auth_token", token, {
        httpOnly: true, // Prevent JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === "production", // Use secure flag in production
        maxAge: 86400000, // Cookie expires in 1 day
      });

      // Send a success response with the user ID
      res.status(200).json({ userId: user._id });
    } catch (error) {
      console.log(error); // Log the error for debugging
      res.status(500).json({ message: "Something went wrong" }); // Return a server error
    }

    router.get("/validate-token", verifyToken, (req, res) => {
      res.status(200).send({ userId: req.userId });
    });
  }
);

export default router;
