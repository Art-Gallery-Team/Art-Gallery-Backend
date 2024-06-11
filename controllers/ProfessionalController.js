const Professional = require('../models/Professional');

exports.getAllProfessionals = (req, res) => {
    Professional.getAll((err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getProfessionalById = (req, res) => {
    const id = req.params.id;
    Professional.getById(id, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.createProfessional = (req, res) => {
    const newProfessional = req.body;
    Professional.createProfessional(newProfessional, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.deleteProfessional = (req, res) => {
    const id = req.params.id;
    Professional.deleteProfessional(id, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.updateProfessional = (req, res) => {
    const id = req.params.id;
    const updatedProfessional = req.body;
    Professional.updateProfessional(id, updatedProfessional, (err, results) => {
        if (err) throw err;
        res.send(results);
    });

};