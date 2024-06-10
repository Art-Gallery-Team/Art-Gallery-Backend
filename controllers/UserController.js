const db = require('../models/database');

exports.getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM users';

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};