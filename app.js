require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');


// import the database model
const db = require('./models/database');

const app = express();
const port = 3000;

app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});