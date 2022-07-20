const express = require('express');
// require('express-async-errors');
const investmentRouters = require('./routers/investmentRouters');
const clienteRouters = require('./routers/clienteRouters');

const app = express();

app.use(express.json());

app.use('/investimentos', investmentRouters);
app.use('/clientes', clienteRouters);

module.exports = app;
