// models/CarbonEntry.js
const mongoose = require("mongoose");

const carbonEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  carbonSavedKg: Number,
  valueEquivalent: String,
}, { timestamps: true });

module.exports = mongoose.model("CarbonEntry", carbonEntrySchema);
