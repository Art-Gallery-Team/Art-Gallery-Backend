const Customer = require('../models/Customer');

exports.getAllCustomers = (req, res) => {
    Customer.getAll((err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getCustomerById = (req, res) => {
    const id = req.params.id;
    Customer.getById(id, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};