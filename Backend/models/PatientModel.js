const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const patientSchema = new mongoose.Schema(
  {
    PatientID: {
      type: String,
      unique: true,
      default: () => new mongoose.Types.ObjectId().toString(),
    },
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    bloodType: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },
    allergies: { type: [String], default: [] },
    medicalHistory: { type: [String], default: [] },
    emergencyContact: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      relationship: { type: String, required: true },
    },
    insuranceProvider: { type: String },
    insuranceNumber: { type: String },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true }, // Active or inactive status
  },
  { timestamps: true }
);

// Hash password before saving
patientSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Password comparison method
patientSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Patient", patientSchema);
