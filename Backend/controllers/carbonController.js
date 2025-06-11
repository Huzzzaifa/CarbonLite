// controllers/carbonController.js
const CarbonEntry = require("../models/CarbonEntry");
const getValueEquivalent = require("../utils/carbonMapper");

exports.createEntry = async (req, res) => {
  const { userId, carbonSavedKg } = req.body;
  const valueEquivalent = getValueEquivalent(carbonSavedKg);

  try {
    const entry = await CarbonEntry.create({ user: userId, carbonSavedKg, valueEquivalent });
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserEntries = async (req, res) => {
  try {
    const entries = await CarbonEntry.find({ user: req.params.userId });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
