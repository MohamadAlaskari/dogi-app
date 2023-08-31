const express = require('express');
const Profile = require('../models/Profile'); // Stelle sicher, dass der Pfad korrekt ist
const router = express.Router();
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');


// get alle profile
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    return res.status(200).json(profiles);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});






// Registrierung eines neuen Benutzers


router.post('/signup', async (req, res) => {
  try {
    const { img, username, alt, email, password } = req.body;
     // Überprüfe, ob Benutzername oder E-Mail bereits existieren
     const existingUser = await Profile.findOne({
      where: {
        [Op.or]: [{ username },{email}],
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists.' });
    }

// Hash das Passwort, bevor es in die Datenbank gespeichert wird
    const hashedPassword = await bcrypt.hash(password, 10);
    const newProfile = await Profile.create({
      img,
      username,
      alt,
      email,
      password: hashedPassword
    });

    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error during user registration:', error);
    return res.status(500).json({ error: 'An error occurred while registering user.' });
  }
});

module.exports = router;
