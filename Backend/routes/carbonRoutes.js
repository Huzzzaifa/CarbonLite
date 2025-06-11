const express = require("express");
const { createEntry, getUserEntries } = require("../controllers/carbonController");
const router = express.Router();

router.post("/", createEntry);
router.get('/userId/:id', getUserEntries); // ✅ Corrected line

module.exports = router;

