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

exports.createCustomer = (req, res) => {
    const newCustomer = req.body;
    Customer.create(newCustomer, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
}

exports.updateCustomer = (req, res) => {
    const id = req.params.id;
    const updatedCustomer = req.body;
    Customer.update(id, updatedCustomer, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
}

exports.deleteCustomer = (req, res) => {
    const id = req.params.id;
    Customer.delete(id, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
}

