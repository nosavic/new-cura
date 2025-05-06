const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const pharmacySchema = new mongoose.Schema(
  {
    pharmacyId: {
      type: String,
      default: () => new mongoose.Types.ObjectId().toString(),
    },
    name: { type: String, required: true }, // Pharmacy Name
    owner: { type: String }, // Owner's Name
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    website: { type: String }, // Optional website
    licenseNumber: { type: String, unique: true }, // Regulatory License Number
    password: { type: String, required: true },
    passwordChangeAt: { type: Date },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
    role: {
      type: String,
      enum: ["admin", "pharmacist", "assistant"],
      default: "pharmacist",
    },
    openingHours: {
      type: String,
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

// Password reset token generation
pharmacySchema.methods.generatePasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  // Hashing the token for protection
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set the expiration time for the token
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes expiration

  return resetToken;
};

module.exports = mongoose.model("Pharmacy", pharmacySchema);
