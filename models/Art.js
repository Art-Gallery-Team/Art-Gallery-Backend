const db = require('../models/Database');


const art = {
    getAll: function(callback) {
        const sql = 'SELECT * FROM artwork';
        db.query(sql, callback);
    },
    getById: function(id, callback) {
        const sql = 'SELECT * FROM artwork WHERE art_id = ?';
        db.query(sql, id, callback);
    },
    create: function(newArt, callback) {
        const sql = 'INSERT INTO artwork SET ?';
        db.query(sql, newArt, callback);
    },
    update: function(id, updatedArt, callback) {
        const sql = 'UPDATE artwork SET ? WHERE art_id = ?';
        db.query(sql, [updatedArt, id], callback);
    },
    delete: function(id, callback) {
        const sql = 'DELETE FROM artwork WHERE art_id = ?';
        db.query(sql, id, callback);
    }
};

module.exports = art;