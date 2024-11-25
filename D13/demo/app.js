const express = require(`express`);
const mongoose = require(`mongoose`);
const todoRoutes = require(`./routes/todoRoutes`);
require(`dotenv`).config();

//Express app

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.listen();

// Connect to MongoDB

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(`connected to MongoDB`);
  } catch (error) {
    console.error(`Error connecting to MongoDb`, error);
  }
};

// Routes
app.use(`/todos`, todoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToDatabase();
});
