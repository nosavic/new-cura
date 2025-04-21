const Patient = require("../models/PatientModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const sendEmail = require("../utils/email");
const crypto = require("crypto");

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

// @desc post patient forgot password
// @route POST /api/patients/forgot-password
exports.forgotPassword = async (req, res) => {
  try {
    // Check if email exists
    const patient = await Patient.findOne({
      email: req.body.email.trim().toLowerCase(),
    });
    if (!patient) return res.status(404).json({ message: "patient not found" });

    // generate a reset token
    const resetToken = patient.generatePasswordResetToken();
    await patient.save({ validateBeforeSave: false });

    // send email with reset token
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/patients/reset-password/${resetToken}`;
    const message = `A password reset request was received. Click the link below to reset your password:\n${resetURL}\n\nThis link is valid for 10 minutes. If you did not request this, please ignore this email.`;

    try {
      await sendEmail({
        email: patient.email,
        subject: "Password reset link",
        message: message,
      });
      res
        .status(200)
        .json({
          status: "success",
          message: "password reset link sent to email",
        });
    } catch (err) {
      patient.passwordResetToken = undefined;
      patient.passwordResetExpires = undefined;
      await patient.save({ validateBeforeSave: false });
      return res
        .status(500)
        .json({ message: "email could not be sent", error: err.message });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc post patient password reset
// @route POST /api/patients/reset-password

exports.resetPassword = async (req, res) => {
  const token = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  try {
    const patient = await Patient.findOne({
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!patient)
      return res
        .status(400)
        .json({ message: "Token is invalid or has expired" });
    //update password
    patient.password = req.body.password;
    patient.passwordResetToken = undefined;
    patient.passwordResetExpires = undefined;
    patient.passwordChangeAt = Date.now();
    //save patient
    await patient.save();
    // res.status(200).json({status:"success", message: "password reset successfully"});
    //login user
    const loginToken = generateToken(patient);
    res.status(200).json({
      status: "success",
      message: "password reset successfully",
      token: loginToken,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
