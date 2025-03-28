const Patient = require("../models/PatientModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

// Generate JWT Token
const generateToken = (patient) => {
  return jwt.sign({ id: patient._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// @desc Register a new patient
// @route POST /api/patients/signup
exports.registerPatient = async (req, res) => {
  try {
    const {
      fullName,
      dateOfBirth,
      gender,
      email,
      phone,
      address,
      city,
      state,
      country,
      bloodType,
      allergies,
      medicalHistory,
      emergencyContact,
      insuranceProvider,
      insuranceNumber,
      password,
    } = req.body;

    // Check if email exists
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient)
      return res.status(400).json({ message: "Email already registered" });

    // Create new patient
    const patient = new Patient({
      fullName,
      dateOfBirth,
      gender,
      email,
      phone,
      address,
      city,
      state,
      country,
      bloodType,
      allergies,
      medicalHistory,
      emergencyContact,
      insuranceProvider,
      insuranceNumber,
      password,
    });

    // Save to database
    await patient.save();

    res.status(201).json({
      message: "Patient registered successfully",
      token: generateToken(patient),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Authenticate patient and get token
// @route POST /api/patients/signin
exports.loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if patient exists
    const patient = await Patient.findOne({ email });
    if (!patient)
      return res.status(400).json({ message: "Invalid credentials" });

    // Validate password
    const isMatch = await patient.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    res
      .status(200)
      .json({ message: "Login successful", token: generateToken(patient) });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get all patients
// @route GET /api/patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get a single patient by ID
// @route GET /api/patients/:id
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Update patient details
// @route PUT /api/patients/:id
exports.updatePatient = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedPatient)
      return res.status(404).json({ message: "Patient not found" });

    res
      .status(200)
      .json({ message: "Patient updated successfully", updatedPatient });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Delete a patient record
// @route DELETE /api/patients/:id
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    res.status(200).json({ message: "Patient record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Toggle active/inactive status
// @route PATCH /api/patients/:id/toggle-status
exports.togglePatientStatus = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    patient.isActive = !patient.isActive;
    await patient.save();

    res.status(200).json({
      message: `Patient is now ${patient.isActive ? "Active" : "Inactive"}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
