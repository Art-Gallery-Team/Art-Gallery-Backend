const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');

router.get('/customers', customerController.getAllCustomers);

module.exports = router;