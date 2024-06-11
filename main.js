const path = require('path');
require('dotenv').config();
const express = require('express');
// const session = require('express-session');


// Import the signup strategy
require('./passport/signupStrategy');
const app = express();

const main = express();
const port = 3000;

// Import the user_routes.js file
const userRoutes = require('./routes/user_routes');

// Import the customer_routes.js file
const customerRoutes = require('./routes/customer_routes');

// Import the art _routes.js file
const artRoutes = require('./routes/art_routes');


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




