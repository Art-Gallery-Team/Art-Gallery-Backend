const Exhibition = require('../models/Exhibition');

exports.getAllExhibitions = (req, res) => {
    Exhibition.getAll((err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getExhibitionById = (req, res) => {
    const id = req.params.id;
    Exhibition.getById(id, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.createExhibition = (req, res) => {
    const newExhibition = req.body;
    Exhibition.createExhibition(newExhibition, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.deleteExhibition = (req, res) => {
    const id = req.params.id;
    Exhibition.deleteExhibition(id, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.updateExhibition = (req, res) => {
    const id = req.params.id;
    const updatedExhibition = req.body;
    User.updateExhibition(id, updatedExhibition, (err, results) => {
        if (err) throw err;
        res.send(results);
    });

};