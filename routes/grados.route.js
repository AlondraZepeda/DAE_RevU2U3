const express = require('express');
const routerGrados = express.Router();
const { convertCelsiusToFahrenheit, welcome } = require('./../controllers/grados.controller');

routerGrados.route('/:id')
    .get(convertCelsiusToFahrenheit);

routerGrados.route('/')
    .get(welcome);

module.exports = routerGrados;