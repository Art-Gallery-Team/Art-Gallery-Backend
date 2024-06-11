const db = require('../models/Database');

const User = {

  // USER CRUD OPERATIONS

  getAll: function(callback) {
    const sql = 'SELECT * FROM users';
    db.query(sql, callback);
  },
  getById: function(id, callback) {
    const sql = 'SELECT * FROM users WHERE user_id = ?';
    db.query(sql, id, callback);
  },
  createUser: function(newUser, callback) {
    const sql = 'INSERT INTO users SET ?';
    db.query(sql, newUser, callback);
  },
  deleteUser: function(id, callback) {
    const sql = 'DELETE FROM users WHERE user_id = ?';
    db.query(sql, id, callback);
  },
  updateUser: function(id, updatedUser, callback) {
    const sql = 'UPDATE users SET ? WHERE user_id = ?';
    db.query(sql, [updatedUser, id], callback);
  }

};

module.exports = User;