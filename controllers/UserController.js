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

exports.createUser = (req, res) => {
    const newUser = req.body;
    User.createUser(newUser, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
};

    exports.deleteUser = (req, res) => {
        const id = req.params.id;
        User.deleteUser(id, (err, results) => {
        if (err) throw err;
        res.send(results);
        });
    };

    exports.updateUser = (req, res) => {
      const id = req.params.id;
      const updatedUser = req.body;
      User.updateUser(id, updatedUser, (err, results) => {
        if (err) throw err;
        res.send(results);
      });

};