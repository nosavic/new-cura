// medicines.controller.js
const Medicine = require("../models/Medicine");

// Create a new medicine
exports.createMedicine = async (req, res, next) => {
  try {
    const medicine = new Medicine(req.body);
    await medicine.save();
    res.status(201).json(medicine);
  } catch (err) {
    next(err);
  }
};

// Get all medicines
exports.getMedicines = async (req, res, next) => {
  try {
    const meds = await Medicine.find();
    res.json(meds);
  } catch (err) {
    next(err);
  }
};

// Get one by ID
exports.getMedicineById = async (req, res, next) => {
  try {
    const med = await Medicine.findById(req.params.id);
    if (!med) return res.status(404).json({ message: "Medicine not found" });
    res.json(med);
  } catch (err) {
    next(err);
  }
};

// Update by ID
exports.updateMedicine = async (req, res, next) => {
  try {
    const med = await Medicine.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!med) return res.status(404).json({ message: "Medicine not found" });
    res.json(med);
  } catch (err) {
    next(err);
  }
};

// Delete by ID
exports.deleteMedicine = async (req, res, next) => {
  try {
    const med = await Medicine.findByIdAndDelete(req.params.id);
    if (!med) return res.status(404).json({ message: "Medicine not found" });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
