const db = require('../models/Database');

const User = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM users';
    db.query(sql, callback);
  },

  getById: function(id, callback) {
    const sql = 'SELECT * FROM users WHERE user_id = ?';
    db.query(sql, id, callback);
  },

  // Add more methods as needed for other user operations
};

module.exports = User;