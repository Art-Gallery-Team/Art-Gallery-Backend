const express = require('express');
const router = express.Router();
const ArtController = require('../controllers/ArtController');

router.get('/images', ArtController.getAllArt);

module.exports = router;
