const db = require('../models/Database');

const Professional = {

    // Professional CRUD OPERATIONS

    getAll: function(callback) {
        const sql = 'SELECT * FROM professional_info';
        db.query(sql, callback);
    },
    getById: function(id, callback) {
        const sql = 'SELECT * FROM professional_info WHERE professional_id = ?';
        db.query(sql, id, callback);
    },
    createProfessional: function(newProfessional, callback) {
        const sql = 'INSERT INTO professional_info SET ?';
        db.query(sql, newProfessional, callback);
    },
    deleteProfessional: function(id, callback) {
        const sql = 'DELETE FROM professional_info WHERE professional_id = ?';
        db.query(sql, id, callback);
    },
    updateProfessional: function(id, updatedProfessional, callback) {
        const sql = 'UPDATE professional_info SET ? WHERE professional_id = ?';
        db.query(sql, [updatedProfessional, id], callback);
    }

};

module.exports = Professional;