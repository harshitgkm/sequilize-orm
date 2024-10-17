const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
