const path = require('path');
require('dotenv').config();
const express = require('express');
// const session = require('express-session');

// Passport.js is a middleware that authenticates requests.
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Import the signup strategy
require('./passport/signupStrategy');

const main = express();
const port = 3000;

// Import the user_routes.js file
const userRoutes = require('./routes/user_routes');

// Import the customer_routes.js file
const customerRoutes = require('./routes/customer_routes');

// Import the art _routes.js file
const artRoutes = require('./routes/art_routes');


// The passport.use() function is used to define a new strategy for Passport.js.
passport.use(passport.initialize());

// A local strategy is used, which means that authentication will be done using a email and password.
passport.use(new LocalStrategy(
    function(email, password, done) {
        if (email === 'email' && password === 'password') {
            return done(null, { email: 'email' });
        } else {
            return done(null, false);
        }
    }));


main.get('/', (req, res) => {
  res.send(`
        <h1>Welcome to the Art API!</h1>
        <p>
            <a href="/users">Go to Users</a>
        </p>
        <p>
            <a href="/images">Go to Arts</a>
        </p><p>
            <a href="/customers">Go to Customers</a>
        </p>
    `);

});
main.use('/', userRoutes);
main.use('/', customerRoutes);
main.use('/', artRoutes);

// Serve static files from the "images" directory
main.use('/images', express.static(path.join(__dirname, 'images')));










main.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});




