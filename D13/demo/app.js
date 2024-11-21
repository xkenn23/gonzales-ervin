const express = require(`express`);
const mongoose = require(`mongoose`);
require(`dotenv`).config();

//Express app

const app = express();
const port = process.env.PORT || 3000;

app.listen();

// Connect to MongoDB

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connect to MongoDB`);
  } catch (error) {
    console.error(`Error connecting to MongoDb`, error);
  }
};

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectToDatabase();
});
