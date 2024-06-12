const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');


router.get('/customers', customerController.getAllCustomers);
router.post('/signup', customerController.createCustomer);
router.get('/customers/:id', customerController.getCustomerById);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;