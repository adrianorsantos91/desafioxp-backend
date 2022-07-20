const express = require('express');
// require('express-async-errors');
const investmentRouters = require('./routers/investmentRouters');
const clienteRouters = require('./routers/clienteRouters');
const assetRouters = require('./routers/assetRouters');

const app = express();

app.use(express.json());

app.use('/investimentos', investmentRouters);
app.use('/clientes', clienteRouters);
app.use('/assets', assetRouters);

module.exports = app;
