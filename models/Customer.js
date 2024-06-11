const db = require('../models/Database');

const Customer = {
    getAll: function(callback) {
        const sql = 'SELECT * FROM customer_info';
        db.query(sql, callback);
    },

    getById: function(id, callback) {
        const sql = 'SELECT * FROM customer_info WHERE user_id = ?';
        db.query(sql, id, callback);
    },

    getByEmail: function(email, callback) {
        const sql = 'SELECT * FROM customer_info WHERE email = ?';
        db.query(sql, email, callback);
    },

    // Add more methods as needed for other user operations
    create: function(newCustomer, callback) {
        const sql = 'INSERT INTO customer_info SET ?';
        db.query(sql, newCustomer, callback);
    },

    update: function(id, updatedCustomer, callback) {
        const sql = 'UPDATE customer_info SET ? WHERE user_id = ?';
        db.query(sql, [updatedCustomer, id], callback);
    },

    delete: function(id, callback) {
        const sql = 'DELETE FROM customer_info WHERE user_id = ?';
        db.query(sql, id, callback);
    }

};

module.exports = Customer;