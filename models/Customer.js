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

    // Add more methods as needed for other user operations
};

module.exports = Customer;