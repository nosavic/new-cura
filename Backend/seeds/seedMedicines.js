const mongoose = require("mongoose");
const Medicine = require("../models/Medicine");
const medicines = require("../data/medicines");
require("dotenv").config();

const MONGO_URI = process.env.DB_URI;

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Medicine.deleteMany();
    await Medicine.insertMany(medicines);
    console.log("✅ Medicines seeded successfully.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding medicines:", err);
    process.exit(1);
  }
};

seed();
