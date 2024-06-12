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
    if (!req.body || !req.body.customer) {
        return res.status(400).send({ message: 'Missing customer object in request body' });
    }

    const newCustomer = req.body.customer;

    // Defining expected keys and types
    const expectedKeys = {
        First_Name: 'string',
        Last_Name: 'string',
        customer_email: 'string',
        password: 'string',
        Phone_Number: 'int',
        Address: 'string',
        Zip: 'string'
    };

    //Validate the new customer object
    for (const key in expectedKeys) {
        if (!newCustomer.hasOwnProperty(key)) {
            return res.status(400).send({ message: `Missing ${key} in request body` });
        }

        if (typeof newCustomer[key] !== expectedKeys[key]) {
            return res.status(400).send({ message: `${key} must be of type ${expectedKeys[key]}` });
        }
    }

    Customer.create(newCustomer, (err, results) => {
        if (err) {
            console.log(err); // Log the error message
            res.status(500).send({ message: 'Error creating customer' });
        } else {
            res.send(results);
        }
    });
};

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

