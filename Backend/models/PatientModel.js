const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const crypto = require("crypto");


const patientSchema = new mongoose.Schema(
  {
    PatientID: {
      type: String,
      unique: true,
      default: () => new mongoose.Types.ObjectId().toString(),
    },
    fullName: { type: String },
    dateOfBirth: { type: Date },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    bloodType: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    allergies: { type: [String], default: [] },
    medicalHistory: { type: [String], default: [] },
    emergencyContact: {
      name: { type: String },
      phone: { type: String },
      relationship: { type: String },
    },
    insuranceProvider: { type: String },
    insuranceNumber: { type: String },
    password: { type: String, required: true },
    passwordChangeAt: { type: Date },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
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

// password reset token generation
patientSchema.methods.generatePasswordResetToken = function(){
  const resetToken = crypto.randomBytes(32).toString("hex");
  //hashing the token for protection
  this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
   
  //set the expiration time for the token
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes expiration

  return resetToken;

};

module.exports = mongoose.model("Patient", patientSchema);
