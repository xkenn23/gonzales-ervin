const express = require("express");
const mongoose = require("mongoose");
require(`dotenv`).config();

// Create Express app
const app = express();

// Middleware
app.use(express.json());

const port = process.env.PORT || 3000;

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(`connected to MongoDB`);
  } catch (error) {
    console.error(`Error connecting to MongoDb`, error);
  }
};

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToDatabase();
});
