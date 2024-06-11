const express = require('express');
const router = express.Router();
const userController = require('../controllers/ExhibitionController');

router.get('/exhibitions', userController.getAllExhibitions);

router.get('/exhibitions/:id', userController.getExhibitionById);

module.exports = router;