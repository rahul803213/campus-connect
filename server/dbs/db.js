const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.mongodb_url;

const db = async () => {
  try {
    await mongoose.connect("mongodb+srv://Rahulmongodb:Rahul77@cluster0.bgk9r.mongodb.net/social_media?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useNewUrlParser: true
      
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

// Gracefully close the database connection on application termination
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("Connection to MongoDB closed");
  process.exit(0);
});

module.exports = db;
