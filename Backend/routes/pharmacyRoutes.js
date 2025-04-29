const express = require("express");
const router = express.Router();
const pharmacyController = require("../controllers/pharmacyController");

// Authentication routes
router.post("/signup", pharmacyController.registerPharmacy);
router.post("/signin", pharmacyController.loginPharmacy);

// Pharmacy management routes
router.get("/", pharmacyController.getAllPharmacies);
router.get("/:id", pharmacyController.getPharmacyById); 
router.put("/:id", pharmacyController.updatePharmacy);
router.delete("/:id", pharmacyController.deletePharmacy);

// Toggle pharmacy open/close status
router.patch("/:id/toggle-status", pharmacyController.toggleClosingStatus);

//forgot and reset password routes
router.post("/forgot-password", pharmacyController.forgotPassword);
router.patch("/reset-password/:token", pharmacyController.resetPassword);

module.exports = router;
