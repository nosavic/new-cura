// medicines.model.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const medicineSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    dosages: [{ type: String }],
    packageSizes: [{ type: String }],
    prescription: { type: Boolean, default: false },
    prices: {
      type: Map,
      of: new Schema(
        {
          type: Map,
          of: Number,
        },
        { _id: false }
      ),
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Medicine", medicineSchema);
