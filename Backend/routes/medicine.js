// routes/medicineRoutes.js

const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/Medicine");

router.post("/", ctrl.createMedicine);
router.get("/", ctrl.getMedicines);
router.get("/:id", ctrl.getMedicineById);
router.put("/:id", ctrl.updateMedicine);
router.delete("/:id", ctrl.deleteMedicine);

// ✅ Export just the router
module.exports = router;
