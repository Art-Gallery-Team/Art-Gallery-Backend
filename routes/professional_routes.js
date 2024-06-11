const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/ProfessionalController');

// Handle GET requests
router.get('/professionals', professionalController.getAllProfessionals);
router.get('/professionals/:id', professionalController.getProfessionalById);

// Handle POST requests
router.post('/professionals', professionalController.createProfessional);

// Handle PUT requests
router.put('/professionals/:id', professionalController.updateProfessional);

// Handle DELETE requests
router.delete('/professionals/:id', professionalController.deleteProfessional);


module.exports = router;