import express from "express";
import colors from "colors";
import router from "./routes/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

// Create an express app
const app = express();

// Set up the app to use static files
app.use("/uploads", express.static("uploads"));

// Initialize CORS
app.use(cors());

// Set up the app to use JSON
app.use(express.json());

// Load environment variables
dotenv.config();

const mongoUrl = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoUrl, {})
  .then(() => {
    console.log(colors.green.bold("Connected to MongoDB"));
  })
  .catch((error) => {
    console.log(colors.red.bold("Error connecting to MongoDB: ", error));
  });

// Set up port
const port = process.env.PORT || 4000;

// Use the router
app.use("/", router);

// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server
app.listen(port, () => {
  console.log(colors.green.bold(`Server is running on port ${port}`));
});
