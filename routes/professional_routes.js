const express = require('express');
const router = express.Router();
const userController = require('../controllers/ProfessionalController');

router.get('/professionals', userController.getAllProfessionals);

router.get('/professionals/:id', userController.getProfessionalById);

module.exports = router;