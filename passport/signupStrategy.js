const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Customer = require('../models/Customer');

passport.use('signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  try {
    // Check if the email is already taken
    const customer = await Customer.getByEmail(email);
    if (customer) {
      return done(null, false, { message: 'Email already taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new customer object
    const newCustomer = {
      email: email,
      password: hashedPassword,

      // Add any other fields you need
    };

    // Save the new customer to the database
    const customerId = await Customer.create(newCustomer);

    // Attach the customer's ID to the newCustomer object
    newCustomer.id = customerId;

    // Call the done function with the new customer
    return done(null, newCustomer);
  } catch (error) {
    return done(error);
  }
}));


module.exports = passport;