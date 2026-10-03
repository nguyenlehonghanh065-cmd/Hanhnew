const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ success: true, total: categories.length, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
module.exports = router;
