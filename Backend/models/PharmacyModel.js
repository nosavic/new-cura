const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const pharmacySchema = new mongoose.Schema(
  {
    pharmacyId: {
      type: String,
      default: () => new mongoose.Types.ObjectId().toString(),
    },
    name: { type: String, required: true }, // Pharmacy Name
    owner: { type: String, required: true }, // Owner's Name
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    website: { type: String }, // Optional website
    licenseNumber: { type: String, required: true, unique: true }, // Regulatory License Number
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "pharmacist", "assistant"],
      default: "pharmacist",
    },
    openingHours: {
      type: String,
      required: true, // e.g., "8:00 AM - 10:00 PM"
    },
    closingStatus: {
      type: Boolean,
      default: false, // `false` means the pharmacy is open, `true` means closed
    },
    services: {
      type: [String], // Array of services offered (e.g., "Prescription Filling", "Consultation", "Vaccination")
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Hash password before saving
pharmacySchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Password comparison method
pharmacySchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Pharmacy", pharmacySchema);
