const express = require('express');
const router = express.Router();

router.get("/projects", (req, res) => {
  res.json([
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
  ]);
});

router.get("/projects/:id", (req, res) => {
  res.json({ id: 1, name: "Project 1" });
});

module.exports = router;