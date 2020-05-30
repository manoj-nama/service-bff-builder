const express = require('express');
const router = express.Router();

router.get("/endpoints", (req, res) => {
  res.json([
    { id: 1, name: "Endpoint1" },
    { id: 2, name: "Endpoint2" },
  ]);
});

router.get("/endpoints/:id", (req, res) => {
  res.json({ id: 1, name: "Endpoint1" });
});

module.exports = router;