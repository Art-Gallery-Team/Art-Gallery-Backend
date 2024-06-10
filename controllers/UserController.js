const User = require('../models/User');

exports.getAllUsers = (req, res) => {
  User.getAll((err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.getById(id, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};