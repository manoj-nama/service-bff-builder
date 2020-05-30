const express = require('express');
const router = express.Router();

router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
  ]);
});

router.get("/users/:id", (req, res) => {
  res.json({ id: 1, name: "User 1" });
});

module.exports = router;