const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');
const passport = require('passport');

router.get('/customers', customerController.getAllCustomers);

// Add the signup route
router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/login',
    failureRedirect: '/signup',
    failureFlash: true
}));

module.exports = router;