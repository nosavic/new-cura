const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
// Route Imports
const pharmacyRoutes = require("./routes/pharmacyRoutes");
const patientRoutes = require("./routes/patientRoutes");

// Middleware
app.use(express.json());
app.use(cookieParser()); // <-- Add cookie-parser middleware

// Configure CORS options

const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN || "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors());

// Routes
app.use("/api/pharmacies", pharmacyRoutes);
app.use("/api/patients", patientRoutes);
// Database Connection
mongoose
  .connect(process.env.DB_URI, { serverSelectionTimeoutMS: 60000 })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// /Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === "production";
const hostURL = isProduction
  ? process.env.HOST_ORIGIN
  : `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Server running on ${hostURL}`);
});

module.exports = app;
