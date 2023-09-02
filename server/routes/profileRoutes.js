const express = require('express');
const router = express.Router();
const {
  getAllProfiles,
  signup,
  login,
  updateProfile,
  deleteProfile,
} = require('../controllers/profileController');

router.get('/', getAllProfiles);
router.post('/signup', signup);
router.post('/login', login);
router.put('/update', updateProfile);
router.delete('/delete', deleteProfile);

module.exports = router;
