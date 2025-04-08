const Pharmacy = require("../models/PharmacyModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

// Generate JWT Token
const generateToken = (pharmacy) => {
  return jwt.sign(
    { id: pharmacy._id, role: pharmacy.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// @desc Register a new pharmacy
// @route POST /api/pharmacies/signup
exports.registerPharmacy = async (req, res) => {
  try {
    const {
      name,
      owner,
      email,
      phone,
      address,
      city,
      state,
      country,
      password,
      licenseNumber,
      openingHours,
    } = req.body;

    if (!openingHours) {
      return res.status(400).json({ message: "Opening hours are required" });
    }

    const existingPharmacy = await Pharmacy.findOne({ email });
    if (existingPharmacy)
      return res.status(400).json({ message: "Email already registered" });

    const pharmacy = new Pharmacy({
      name,
      owner,
      email,
      phone,
      address,
      city,
      state,
      country,
      password,
      licenseNumber,
      openingHours,
    });

    await pharmacy.save();

    res.status(201).json({
      message: "Pharmacy registered successfully",
      token: generateToken(pharmacy),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Authenticate pharmacy and get token
// @route POST /api/pharmacies/signin
exports.loginPharmacy = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if pharmacy exists
    const pharmacy = await Pharmacy.findOne({ email });
    if (!pharmacy)
      return res.status(400).json({ message: "Invalid credentials" });

    // Validate password
    const isMatch = await pharmacy.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    res
      .status(200)
      .json({ message: "Login successful", token: generateToken(pharmacy) });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get all pharmacies
// @route GET /api/pharmacies
exports.getAllPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.status(200).json(pharmacies);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get a single pharmacy by ID
// @route GET /api/pharmacies/:id
exports.getPharmacyById = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findById(req.params.id);
    if (!pharmacy)
      return res.status(404).json({ message: "Pharmacy not found" });

    res.status(200).json(pharmacy);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Update pharmacy details
// @route PUT /api/pharmacies/:id
exports.updatePharmacy = async (req, res) => {
  try {
    const updatedPharmacy = await Pharmacy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedPharmacy)
      return res.status(404).json({ message: "Pharmacy not found" });

    res
      .status(200)
      .json({ message: "Pharmacy updated successfully", updatedPharmacy });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Delete a pharmacy
// @route DELETE /api/pharmacies/:id
exports.deletePharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findByIdAndDelete(req.params.id);
    if (!pharmacy)
      return res.status(404).json({ message: "Pharmacy not found" });

    res.status(200).json({ message: "Pharmacy deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Toggle pharmacy closing status
// @route PATCH /api/pharmacies/:id/toggle-status
exports.toggleClosingStatus = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findById(req.params.id);
    if (!pharmacy)
      return res.status(404).json({ message: "Pharmacy not found" });

    pharmacy.closingStatus = !pharmacy.closingStatus;
    await pharmacy.save();

    res.status(200).json({
      message: `Pharmacy is now ${pharmacy.closingStatus ? "Closed" : "Open"}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
