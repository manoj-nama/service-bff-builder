const express = require('express');
const router = express.Router();

router.get("/elements", (req, res) => {
  res.json([
    { id: 1, name: "Element1" },
    { id: 2, name: "Element2" },
  ]);
});

router.get("/elements/:id", (req, res) => {
  res.json({ id: 1, name: "Element1" });
});

module.exports = router;