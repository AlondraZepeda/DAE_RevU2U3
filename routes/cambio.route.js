const express = require('express');
const routerCambio = express.Router();
const { convertdlstopesos, welcome } = require('./../controllers/cambio.controller');

routerCambio.route('/:id')
    .get(convertdlstopesos);

routerCambio.route('/')
    .get(welcome);

module.exports = routerCambio;