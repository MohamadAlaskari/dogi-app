const Profile = require('../models/Profile');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

async function getAllProfiles(req, res) {
  try {
    const profiles = await Profile.findAll();
    if (profiles.length === 0) {
      return res.status(404).json({ error: 'Keine Profile gefunden!' });
    }
    return res.status(200).json(profiles);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
}

async function signup(req, res) {
  try {
    const { img, username, alt, email, password } = req.body;
    // Überprüfe, ob Benutzername oder E-Mail bereits existieren
    const existingUser = await Profile.findOne({
      where: {
        [Op.or]: [{ username }, { email }],
      },
    });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists!' });
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

    return res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during user registration:', error);
    return res.status(500).json({ error: 'An error occurred while registering user!' });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body; // Hier das Passwort hinzugefügt
    const user = await Profile.findOne({
      where: { username }
    })
    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    const password_match = await bcrypt.compare(password, user.password);
    if (!password_match) {
      return res.status(401).json({ 'error': 'Incorrect password!' })
    }
    // Erfolgreiche Anmeldung
    return res.status(200).json({ message: 'Login successfull!' })
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while login user!' })
  }
}

async function updateProfile(req, res) {
  // Implementiere die Profilaktualisierungslogik hier
}

async function deleteProfile(req, res) {
  // Implementiere die Profilöschungslogik hier
}

module.exports = {
  getAllProfiles,
  signup,
  login,
  updateProfile,
  deleteProfile,
};
