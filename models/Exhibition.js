const db = require('../models/Database');

const Exhibition = {

    // Exhibition CRUD OPERATIONS

    getAll: function(callback) {
        const sql = 'SELECT * FROM exhibition_info';
        db.query(sql, callback);
    },
    getById: function(id, callback) {
        const sql = 'SELECT * FROM exhibition_info WHERE Exhibition_ID = ?';
        db.query(sql, id, callback);
    },
    createExhibition: function(newExhibition, callback) {
        const sql = 'INSERT INTO exhibition_info SET ?';
        db.query(sql, newExhibition, callback);
    },
    deleteExhibition: function(id, callback) {
        const sql = 'DELETE FROM exhibition_info WHERE Exhibition_ID = ?';
        db.query(sql, id, callback);
    },
    updateExhibition: function(id, updatedExhibition, callback) {
        const sql = 'UPDATE exhibition_info SET ? WHERE Exhibition_ID = ?';
        db.query(sql, [updatedExhibition, id], callback);
    }

};

module.exports = Exhibition;