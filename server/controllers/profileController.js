const express = require('express');
const Profile = require('../models/Profile'); // Stelle sicher, dass der Pfad korrekt ist
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    return res.status(200).json(profiles);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

module.exports = router;
